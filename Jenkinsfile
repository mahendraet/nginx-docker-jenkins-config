pipeline {
    agent any

    environment {
        APP_NAME = "app"
        BUILD_VERSION = "v1"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker images...'
                sh 'SHOPIFY_API_KEY=e96df3a6c83cbbb4eda6d65b6e338df3 && docker-compose up --build'
            }
        }

        stage('Switch Traffic') {
            steps {
                echo 'Switching traffic...'
                sh "sed -i 's/app_servers_v1/app_servers_${BUILD_VERSION}/' nginx.conf"
                sh 'docker-compose restart nginx'
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Cleaning up old containers...'
                // script {
                //     echo "Cleaning up old containers..."
                //     sh "docker-compose down --remove-orphans"
                // }
            }
        }
    }
}
