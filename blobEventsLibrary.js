function blobListen(element){
  return new BlobEvent(element);
}


function BlobEvent(element){
  this.element = element;
}

BlobEvent.prototype = {
  ready: function(callback){
    this.element.readyState != 'loading' ? callback() : this.element.addEventListener('DOMready', callback);
  },

  click: function(callback){
    document.getElementById(this.element).addEventListener('click', callback, false);
  },

  show: function(){
    document.getElementById(this.element).style.display = '';
  },

  hide: function(){
    document.getElementById(this.element).style.display = 'none';
  }


};
