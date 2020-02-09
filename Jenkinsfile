pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-p 7001:7001'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''npm install
'''
      }
    }

    stage('dev') {
      steps {
        sh 'npm run start'
      }
    }

  }
}