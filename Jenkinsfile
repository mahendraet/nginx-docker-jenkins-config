pipeline {
    agent any

    environment {
        APP_NAME = "app"
        BUILD_VERSION = "v${BUILD_NUMBER}"
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
                sh 'docker-compose build'
            }
        }

        stage('Deploy Blue-Green') {
            steps {
                echo 'Deploying Blue-Green...'
                script {
                    sh "docker-compose up -d ${APP_NAME}-${BUILD_VERSION}"
                }
            }
        }

        stage('Switch Traffic') {
            steps {
                echo 'Switching traffic...'
                sh "sed -i 's/app_servers_v1/app_servers_${APP_VERSION}/' nginx.conf"
                sh 'docker-compose restart nginx'
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Cleaning up old containers...'
                script {
                    echo "Cleaning up old containers..."
                    sh "docker-compose down --remove-orphans"
                }
            }
        }
    }
}
