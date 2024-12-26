pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                withCredentials([file(credentialsId: 'env', variable: 'SECRET_FILE')]) {
                    sh "export ENV_FILE=$SECRET_FILE && docker-compose up -d --build"
                }
            }
        }

        stage('Restart Nginx') {
            steps {
                sh 'docker restart nginx'
            }
        }
    }
}
