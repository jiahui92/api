pipeline {
  agent any
  stages {
  
    stage('run') {
      steps {
        sh '''
          docker-compose up -d --build
          docker logs api
        '''
      }
    }

  }
}