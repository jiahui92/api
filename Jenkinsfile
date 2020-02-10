pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker build . -t api'
      }
    }

    stage('run') {
      steps {
        sh '''
# 当container.api不存在时，返回true保证状态正常
docker rm -f api || true 
docker run -d --name api -p 7001:7001 -v ~/logs:/root/logs --restart always api
docker logs api
'''
      }
    }

  }
}