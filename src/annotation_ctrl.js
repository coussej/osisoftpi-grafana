import _ from 'lodash'

export class PiWebApiAnnotationsQueryCtrl {
  constructor ($scope) {
    this.$scope = $scope
    //this.annotation.query = (this.annotation.query || {})
    this.databases = []
    this.templates = []
    this.getDatabases()
  }
  templateChanged () {
    console.log('Yay! templateChanged')
  }

  databaseChanged () {
    this.getEventFrames()
  }
  getDatabases () {
    var ctrl = this
    ctrl.datasource.getDatabases(this.datasource.afserver.webid).then(dbs => {
      ctrl.databases = dbs
      if (ctrl.annotation.database) ctrl.getEventFrames()
    })
  }
  getEventFrames () {
    console.log('Yay! getEventFrames')
    console.log(this)
    var ctrl = this
    ctrl.datasource.getEventFrameTemplates(ctrl.annotation.database.WebId).then(templates => {
      ctrl.templates = templates
    })
  }
}

PiWebApiAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html'
