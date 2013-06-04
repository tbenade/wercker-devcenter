name: ubuntu12.04-webessentials
version: 0.0.1
inherits: wercker/ubuntu12.04-chef10.18.2
type : main
platform : ubuntu@12.04
wercker-url: http://app.wercker.com/
code-url: http://github.com/wercker/
packages :
  - ruby@2.0.0
  - libxml
description : Base box with most popular libraries for the web installed
script : sudo chef-solo -c $WERCKER_SOURCE_DIR/solo.rb -j $WERCKER_SOURCE_DIR/solo.json -l debug
env :
  VAR1 : value1
  VARWITHHOST : connectionstring=$$HOST$$
init-script: |
  echo 1
  echo 2

keywords:
  - ruby
box-detect:
  priority : 100
  version : 
  detect:
    - files:
      - Gemfile
      
default-build:
  ruby-on-rails:
    priority: 100
    detect:
      - files:
          - config
    text-to-append: |
      build:
          # The steps that will be executed on build
          steps:
              # A step that executes `bundle install` command
              - bundle-install
              # A step that prepares the database.yml with settings from the database you defined in services
              - rails-database-yml      
              # A custom script step, name value is used in the UI
              # and the code value contains the command that get executed
              - script:
                  name: echo ruby information
                  code: |
                      echo "ruby version $(ruby --version) running"
                      echo "from location $(which ruby)"
                      echo -p "gem list: $(gem list)"      
              # Add more steps here:
              # - script:
              #        name: rspec
              #        script: bundle exec rspec
  ruby:
    priority : 50
    detect:
      - default: true
    text-to-append: |
      # Build definition
      build:
        # The steps that will be executed on build
        steps:
          # A step that executes `bundle install` command
          - bundle-install 
          
          # A custom script step, name value is used in the UI
          # and the code value contains the command that get executed
          - script:
              name: echo ruby information
              code: |
                echo "ruby version $(ruby --version) running"
                echo "from location $(which ruby)"
                echo -p "gem list: $(gem list)"
          
          # Add more steps here:
          #- script:
          #    name: rspec
          #    script: bundle exec rspec
