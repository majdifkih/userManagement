pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
                // Commande de construction
                sh 'echo Building...'
            }
        }
        stage('Deploy') {
            steps {
                // Commande de déploiement
                sh 'ls'  // Assurez-vous d'utiliser 'sh' pour les commandes shell
                sh 'lsb_release -a'
                sh 'npm --version'
            }
        }
    }
}
