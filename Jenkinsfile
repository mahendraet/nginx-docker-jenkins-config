pipeline {
    agent any

    environment {
        SECRET = credentials('some-key')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo "some-key: ${SECRET}"
                echo "${env}"
                sh 'docker-compose up -d --build'
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
