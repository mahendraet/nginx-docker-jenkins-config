pipeline {
    agent any

    environment {
        SHOPIFY_API_KEY = credentials('SHOPIFY_API_KEY')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh "export SHOPIFY_API_KEY=$SHOPIFY_API_KEY && docker-compose up -d --build"
            }
        }

        stage('Switch Traffic') {
            steps {
                sh 'docker-compose restart nginx'
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Cleaning up old containers...'
            }
        }
    }
}
