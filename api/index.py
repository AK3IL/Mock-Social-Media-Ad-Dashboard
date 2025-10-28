from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime, timedelta
import random

app = Flask(__name__)
CORS(app)

def generate_historical_data(days, max_val, min_val=0, is_float=False):
    """Generate mock historical data for charts"""
    data = []
    for i in range(days - 1, -1, -1):
        date = datetime.now() - timedelta(days=i)
        if is_float:
            value = round(random.uniform(min_val, max_val), 1)
        else:
            value = random.randint(min_val, max_val)
        data.append({
            'date': date.strftime('%b %-d'),
            'value': value
        })
    return data

# Paid Social Data
kpi_data = [
    {
        'title': 'Total Spend',
        'value': '$14,320',
        'comparisonValue': '+12.5%',
        'isPositive': True,
        'chartData': [{'value': random.randint(200, 1200)} for _ in range(20)]
    },
    {
        'title': 'Total Impressions',
        'value': '2.1M',
        'comparisonValue': '+8.2%',
        'isPositive': True,
        'chartData': [{'value': random.randint(1000, 6000)} for _ in range(20)]
    },
    {
        'title': 'Total Likes',
        'value': '45.8K',
        'comparisonValue': '-1.8%',
        'isPositive': False,
        'chartData': [{'value': random.randint(100, 900)} for _ in range(20)]
    }
]

platform_performance_data = [
    {
        'platform': 'Facebook',
        'iconColor': 'text-blue-600',
        'metrics': [
            {'name': 'Clicks', 'value': '12.5K', 'comparisonValue': '+15%', 'isPositive': True, 'historicalData': generate_historical_data(30, 500)},
            {'name': 'Impressions', 'value': '1.2M', 'comparisonValue': '+10%', 'isPositive': True, 'historicalData': generate_historical_data(30, 50000)},
            {'name': 'Spend', 'value': '$7.2K', 'comparisonValue': '+20%', 'isPositive': False, 'historicalData': generate_historical_data(30, 250)},
            {'name': 'Conversions', 'value': '850', 'comparisonValue': '+5%', 'isPositive': True, 'historicalData': generate_historical_data(30, 30)}
        ]
    },
    {
        'platform': 'Twitter',
        'iconColor': 'text-sky-500',
        'metrics': [
            {'name': 'Clicks', 'value': '8.2K', 'comparisonValue': '+12%', 'isPositive': True, 'historicalData': generate_historical_data(30, 300)},
            {'name': 'Impressions', 'value': '800K', 'comparisonValue': '+5%', 'isPositive': True, 'historicalData': generate_historical_data(30, 30000)},
            {'name': 'Spend', 'value': '$4.1K', 'comparisonValue': '+18%', 'isPositive': False, 'historicalData': generate_historical_data(30, 150)},
            {'name': 'Conversions', 'value': '420', 'comparisonValue': '-2%', 'isPositive': False, 'historicalData': generate_historical_data(30, 15)}
        ]
    },
    {
        'platform': 'LinkedIn',
        'iconColor': 'text-blue-700',
        'metrics': [
            {'name': 'Clicks', 'value': '4.1K', 'comparisonValue': '+8%', 'isPositive': True, 'historicalData': generate_historical_data(30, 150)},
            {'name': 'Impressions', 'value': '350K', 'comparisonValue': '+3%', 'isPositive': True, 'historicalData': generate_historical_data(30, 12000)},
            {'name': 'Spend', 'value': '$2.0K', 'comparisonValue': '+10%', 'isPositive': False, 'historicalData': generate_historical_data(30, 70)},
            {'name': 'Conversions', 'value': '150', 'comparisonValue': '+10%', 'isPositive': True, 'historicalData': generate_historical_data(30, 5)}
        ]
    },
    {
        'platform': 'Instagram',
        'iconColor': 'text-pink-500',
        'metrics': [
            {'name': 'Clicks', 'value': '15.8K', 'comparisonValue': '+25%', 'isPositive': True, 'historicalData': generate_historical_data(30, 600)},
            {'name': 'Impressions', 'value': '1.8M', 'comparisonValue': '+15%', 'isPositive': True, 'historicalData': generate_historical_data(30, 60000)},
            {'name': 'Spend', 'value': '$9.5K', 'comparisonValue': '+22%', 'isPositive': False, 'historicalData': generate_historical_data(30, 320)},
            {'name': 'Conversions', 'value': '1.2K', 'comparisonValue': '+8%', 'isPositive': True, 'historicalData': generate_historical_data(30, 40)}
        ]
    }
]

# Organic Social Data
organic_kpi_data = [
    {
        'title': 'Total Followers',
        'value': '125.4K',
        'comparisonValue': '+5.2%',
        'isPositive': True,
        'chartData': [{'value': random.randint(500, 2500)} for _ in range(20)]
    },
    {
        'title': 'Total Engagement',
        'value': '8.9%',
        'comparisonValue': '+1.1%',
        'isPositive': True,
        'chartData': [{'value': random.randint(20, 120)} for _ in range(20)]
    },
    {
        'title': 'Total Reach',
        'value': '850K',
        'comparisonValue': '-0.5%',
        'isPositive': False,
        'chartData': [{'value': random.randint(800, 3800)} for _ in range(20)]
    }
]

organic_platform_performance_data = [
    {
        'platform': 'Facebook',
        'iconColor': 'text-blue-600',
        'metrics': [
            {'name': 'Followers', 'value': '50.1K', 'comparisonValue': '+2.1%', 'isPositive': True, 'historicalData': generate_historical_data(30, 100)},
            {'name': 'Engagement Rate', 'value': '4.5%', 'comparisonValue': '+0.5%', 'isPositive': True, 'historicalData': generate_historical_data(30, 10, 1, True)},
            {'name': 'Post Reach', 'value': '300K', 'comparisonValue': '-1.2%', 'isPositive': False, 'historicalData': generate_historical_data(30, 10000)},
            {'name': 'Profile Visits', 'value': '5.2K', 'comparisonValue': '+8%', 'isPositive': True, 'historicalData': generate_historical_data(30, 200)}
        ]
    },
    {
        'platform': 'Twitter',
        'iconColor': 'text-sky-500',
        'metrics': [
            {'name': 'Followers', 'value': '25.8K', 'comparisonValue': '+3.5%', 'isPositive': True, 'historicalData': generate_historical_data(30, 80)},
            {'name': 'Engagement Rate', 'value': '2.1%', 'comparisonValue': '+0.2%', 'isPositive': True, 'historicalData': generate_historical_data(30, 5, 0, True)},
            {'name': 'Post Reach', 'value': '150K', 'comparisonValue': '+2.0%', 'isPositive': True, 'historicalData': generate_historical_data(30, 5000)},
            {'name': 'Profile Visits', 'value': '2.1K', 'comparisonValue': '+5%', 'isPositive': True, 'historicalData': generate_historical_data(30, 70)}
        ]
    },
    {
        'platform': 'LinkedIn',
        'iconColor': 'text-blue-700',
        'metrics': [
            {'name': 'Followers', 'value': '10.5K', 'comparisonValue': '+1.8%', 'isPositive': True, 'historicalData': generate_historical_data(30, 30)},
            {'name': 'Engagement Rate', 'value': '6.2%', 'comparisonValue': '+1.1%', 'isPositive': True, 'historicalData': generate_historical_data(30, 15, 2, True)},
            {'name': 'Post Reach', 'value': '80K', 'comparisonValue': '+5.5%', 'isPositive': True, 'historicalData': generate_historical_data(30, 2500)},
            {'name': 'Profile Visits', 'value': '1.5K', 'comparisonValue': '+12%', 'isPositive': True, 'historicalData': generate_historical_data(30, 50)}
        ]
    },
    {
        'platform': 'Instagram',
        'iconColor': 'text-pink-500',
        'metrics': [
            {'name': 'Followers', 'value': '39.0K', 'comparisonValue': '+4.2%', 'isPositive': True, 'historicalData': generate_historical_data(30, 120)},
            {'name': 'Engagement Rate', 'value': '8.8%', 'comparisonValue': '+0.8%', 'isPositive': True, 'historicalData': generate_historical_data(30, 20, 3, True)},
            {'name': 'Post Reach', 'value': '420K', 'comparisonValue': '-2.5%', 'isPositive': False, 'historicalData': generate_historical_data(30, 15000)},
            {'name': 'Profile Visits', 'value': '8.9K', 'comparisonValue': '+15%', 'isPositive': True, 'historicalData': generate_historical_data(30, 300)}
        ]
    }
]

@app.route('/api/paid-performance', methods=['GET'])
def paid_performance():
    return jsonify({
        'kpiData': kpi_data,
        'platformPerformanceData': platform_performance_data
    })

@app.route('/api/organic-performance', methods=['GET'])
def organic_performance():
    return jsonify({
        'organicKpiData': organic_kpi_data,
        'organicPlatformPerformanceData': organic_platform_performance_data
    })

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        'success': True,
        'data': {
            'status': 'healthy',
            'timestamp': datetime.now().isoformat()
        }
    })

# Vercel serverless function handler
# This is required for Vercel to run the Flask app
handler = app

# For local development
if __name__ == '__main__':
    app.run(debug=True, port=5000)
