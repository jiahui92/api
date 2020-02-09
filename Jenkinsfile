pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker build -t api ./'
      }
    }

    stage('run') {
      steps {
        sh 'docker run -name api -p 7001:7001 -v ~/logs:~/logs api'
      }
    }

  }
}