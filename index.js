const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i])
        }
        return collection
      } else if (Object.keys(collection)) {
        for (let i = 0; i < Object.keys(collection).length; i++) {
          callback(collection[Object.keys(collection)[i]])
        }
        return collection
      }
    },

    map: function(collection, callback) {
      
      if (Array.isArray(collection)) {
        let mappedArray = []
        for (let i = 0; i < collection.length; i++) {
          mappedArray.push(callback(collection[i]))
        }
        return mappedArray
      } else if (Object.keys(collection)) {
        let mappedArray = []
        let objectKeys = Object.keys(collection)
        for (let i = 0; i < Object.keys(collection).length; i++) {
          mappedArray.push(callback(collection[objectKeys[i]]))
        }
        return mappedArray
      }

    },

    reduce: function(collection, callback, acc) {
      if (acc) {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
        return acc
      } else {
        let acc = collection[0]
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
        return acc
      }
    },

    find: function(collection, predicate) {
      let found
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          found = collection[i]
          break
        }
      }
      return found
    },

    filter: function(collection, predicate) {
      let filteredArray = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          filteredArray.push(collection[i])
        }
      }
      return filteredArray
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n) {
      if (n) {
        let resultArray = []
        for (let i = 0; i < n; i++) {
          resultArray.push(array[i])
        }
        return resultArray
      } else {
        return array[0]
      }
    },

    last: function(array, n) {
      if (n) {
        let resultArray = []
        for (let i = n; i > 0; i--) {
          resultArray.push(array[array.length - i])
        }
        return resultArray
      } else {
        return array[array.length - 1]
      }
    },

    compact: function(array) {
      let trueArray = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          trueArray.push(array[i])
        }
      }
      return trueArray
    },

    // sortBy: function(array, callback) {
    //   let changedArray = []
    //   for (let i = 0; i < array.length; i++) {
    //     changedArray.push(callback(array[i]))
    //     if (callback(array[i]) < changedArray[0]) {
    //       changedArray
    //     }
    //   }
    //   let sortedArray = changedArray.sort()
    //   for (let i = 0; i < array.length; i++) {
    //     if (sortedArray[i] === changedArray) {
    //     }
    //   }
    //   }

    functions: function() {

    },


  }
})()

fi.libraryMethod()
