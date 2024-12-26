pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Env') {
            steps {
                withCredentials([file(credentialsId: 'env', variable: 'SECRET_FILE')]) {
                    sh '''
                    echo "Using secret file located at $SECRET_FILE"
                    cat $SECRET_FILE | xargs export
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                sh '''
                    docker-compose up -d --build
                '''
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
