from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules
import json


# Datos de compras simulados para dos plataformas
data_platform_A = {
    'user_id': [1, 2, 3, 4, 5, 6],
    'product': ['Pack Piña Chips', 'Pack Remolacha', 'Pack Piña Chips', 'Pack Manzana', 'Pack Coliflor', 'Pack Naranja'],
    'purchase_count': [3, 2, 1, 5, 2, 4]
}

data_platform_B = {
    'user_id': [1, 2, 3, 4, 5, 6],
    'product': ['Pan Integral', 'Yogurt', 'Pan Integral', 'Yogurt', 'Yogurt', 'Yogurt'],
    'purchase_count': [4, 2, 3, 1, 5, 5]
}

# Nombres de las plataformas
platform_A_name = 'Paramo Snacks'
platform_B_name = 'Tienda Lercho'

# Preparar datos para Apriori
df_A = pd.DataFrame(data_platform_A)
df_B = pd.DataFrame(data_platform_B)

df_A['platform'] = platform_A_name
df_B['platform'] = platform_B_name

df = pd.concat([df_A, df_B])

basket = df.groupby(['user_id', 'product']).size().unstack().reset_index().fillna(0).set_index('user_id')
basket = basket.applymap(lambda x: 1 if x > 0 else 0)

# Aplicar algoritmo Apriori
frequent_itemsets = apriori(basket, min_support=0.01, use_colnames=True)
rules = association_rules(frequent_itemsets, metric="lift", min_threshold=1)

# Filtrar reglas para recomendaciones cruzadas
cross_platform_recommendations = rules[
    (rules['lift'] > 1) & 
    (rules['consequents'].apply(lambda x: any(item in df_B['product'].unique() for item in x))) &
    (rules['antecedents'].apply(lambda x: any(item in df_A['product'].unique() for item in x)))
]

# Formatear las reglas en JSON
def format_rule(row):
    antecedent_platform = platform_A_name if any(item in df_A['product'].unique() for item in row['antecedents']) else platform_B_name
    consequent_platform = platform_B_name if any(item in df_B['product'].unique() for item in row['consequents']) else platform_A_name
    return {
        'antecedent': {
            'products': list(row['antecedents']),
            'platform': antecedent_platform
        },
        'consequent': {
            'products': list(row['consequents']),
            'platform': consequent_platform
        },
        'support': row['support'],
        'confidence': row['confidence'],
        'lift': row['lift']
    }

recommendations = cross_platform_recommendations.apply(format_rule, axis=1).tolist()

# Convertir a JSON
recommendations_json = json.dumps(recommendations, indent=4)



app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://cuddly-space-umbrella-wr75557p9w6qh5xvw-5000.app.github.dev"}})


# 2. Define una ruta para obtener las recomendaciones
@cross_origin
@app.route('/recomendaciones', methods=['GET'])
def obtener_recomendaciones():
    # Aquí, obtén las recomendaciones generadas por tu sistema
    
    return recommendations_json

if __name__ == '__main__':
    app.run(debug=True)