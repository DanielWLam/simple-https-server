function Router(req, res) {
  this.req = req;
  this.res = res;
}

Router.prototype.get = function (url, callback) {
  if (this.req.url === url && this.req.method.toUpperCase() === 'GET') {
    callback(this.req, this.res)
  }
  
}
Router.prototype.post = function (url, callback) {
  callback(this.req, this.res)
}

module.exports = Router;