var Generator = require('yeoman-generator');

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
  
  prompting() {
    return this.prompt(
      [
        {
          type: 'input',
          name: 'name',
          message: 'Project Name:',
          default: this.appname
        },
        // {
        //   type: 'confirm',
        //   name: 'cool',
        //   message: 'Would you like to enable the cool feature?'
        // },
        {
          type: 'input',
          name: 'username',
          message: 'Github Username:',
          store: true
        }
      ]
    ).then((answers) => {
      this.log(answers.name);
      this.log(answers.username);
    });
  }
  
  method1() {
    console.log('methond 1 just ran');
  }
  
  method2() {
    console.log('methond 2 just ran');
  }
  
  _private_method() {
    console.log('private hey');
  }
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