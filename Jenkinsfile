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
                    sh '''
                    echo "Using secret file located at $SECRET_FILE"
                    docker-compose up -d --env-file $SECRET_FILE --build
                    '''
                }
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
