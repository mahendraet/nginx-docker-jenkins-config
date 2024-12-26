pipeline {
    agent any

    environment {
        ENV = credentials('env')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh '''
                    export $(echo $ENV | xargs) 
                    env
                '''
                sh "docker-compose up -d --build"
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
