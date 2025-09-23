pipeline {
    agent any
    stages {
        // ...
        stage('Deploy to Tomcat') {
            steps {
                // Correct command to copy the *contents* of the build folder.
                sh 'cp -r build/* "C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/rwdy_cicd/"'
            }
        }
    }
}