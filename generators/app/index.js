const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    
    this.option('babel');

    this.helperMethod = function () {
      console.log('won\'t be called');
    }
    
    // Required Arguments
    this.argument('appname', {
      type: String,
      required: true,
    });
    this.log(this.options.appname);
    
    // Options
    this.option('coffee');
    let suffix = (this.options.coffee ? ".coffee" : ".js");
    this.log(suffix);
  }
  
  introduction() {
    this.log('Hey! Welcome to my generator');
  }
  
  // Composability
  initializing() {
    this.composeWith(require.resolve('../turbo'));
    this.composeWith(require.resolve('../electric'));
  }

  // // Install Queue
  // install() {
  //   this.npmInstall(['express'], {'save': true});
  //   this.spawnCommand('git', ['log']);
  // }
  
  // Destination Context
  paths() {
    // Where the user is running `yo`
    this.log(this.contextRoot);
    // Where closest `.yo-rc.json` is found
    this.log(this.destinationRoot());
    // Join paths
    this.log(this.destinationPath('index.js'));
    
    // Templates location
    this.log(this.sourceRoot());
    // Join paths
    this.log(this.templatePath('index.js'));
  }
  
  writing() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'),
      {
        title: 'Templating with Yeoman'
      }
    );
  }
  
  // prompting() {
  //   return this.prompt(
  //     [
  //       {
  //         type: 'input',
  //         name: 'name',
  //         message: 'Project Name:',
  //         default: this.appname
  //       },
  //       // {
  //       //   type: 'confirm',
  //       //   name: 'cool',
  //       //   message: 'Would you like to enable the cool feature?'
  //       // },
  //       {
  //         type: 'input',
  //         name: 'username',
  //         message: 'Github Username:',
  //         store: true
  //       }
  //     ]
  //   ).then((answers) => {
  //     this.log(answers.name);
  //     this.log(answers.username);
  //   });
  // }
};

// class MyBase extends Generator {
//   helper() {
//     console.log('methods on the parent won\'t be called automatically');
//   }
// }
// 
// module.exports = class extends MyBase {
//   exec() {
//     this.helper();
//   }
// };