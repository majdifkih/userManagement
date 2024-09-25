pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }
    stages {
        stage("RunClient") {
            steps {
                dir('Client') { 
                    script {
                        sh 'npm install'
                        sh 'npm start'
                    }
                }
            }
        }
        stage("RunServer") {
            steps {
                dir('Server') { 
                    script {
                        sh 'npm install'
                        sh 'node server.js'
                    }
                }
            }
        }
        stage("Build") {
            steps {
                dir('Client') { 
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Déploiement des applications...'
                }
            }
        }
    }
}
