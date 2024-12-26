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
                def singlyQuoted = SECRET
                echo "some-key: ${singlyQuoted}"
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
