const questions = { // eslint-disable-line no-unused-vars
  // spiritual vs secular
  question_0: {
    a: 10,
    b: 2,
    c: -1,
    d: 5,
    e: 0,

  },
  question_1: {
    a: 10,
    b: 0,
    c: 0,
    d: 0,
    e: 0,

  },
  question_2: {
    a: -20,
    b: -5,
    c: 0,
    d: 0,
    e: 0,

  },
  question_3: {
    a: 10,
    b: 2,
    c: 0,
    d: 2,
    e: 0,

  },
  question_4: {
    a: -20,
    b: -5,
    c: 0,
    d: 0,
    e: 0,

  },
  // ideal vs morphological
  question_5: {
    a: 2,
    b: 10,
    c: 0,
    d: 0,
    e: 5,

  },
  question_6: {
    a: 0,
    b: 7,
    c: 0,
    d: 0,
    e: 4,

  },
  question_7: {
    a: -1,
    b: -20,
    c: 0,
    d: 3,
    e: -5,

  },
  question_8: {
    a: 5,
    b: 8,
    c: 0,
    d: 0,
    e: 10,

  },
  question_9: {
    a: 0,
    b: 15,
    c: 0,
    d: 5,
    e: 12,

  },

  question_10: {
    a: -10,
    b: -10,
    c: 20,
    d: -5,
    e: -4,

  },
  //inhuman vs alterhuman
  question_11: {
    a: 2,
    b: -5,
    c: 15,
    d: 2,
    e: 5,

  },
  question_12: {
    a: -5,
    b: 5,
    c: 15,
    d: -10,
    e: 5,

  },
  question_13: {
    a: 0,
    b: 5,
    c: -15  ,
    d: 0,
    e: 0,

  },
  question_14: {
    a: -1,
    b: -10,
    c: -15,
    d: -1,
    e: -3,

  },
  //rewilding vs synthesis
  question_15: {
    a: 10,
    b: 2,
    c: -2,
    d: 20,
    e: -20,

  },
  question_16: {
    a: 5,
    b: 0,
    c: 1,
    d: 15,
    e: -15,

  },
  question_17: {
    a: -5,
    b: -5,
    c: 0,
    d: -10,
    e: 20,

  },
  question_18: {
    a: 0,
    b: 10,
    c: 10,
    d: 10,
    e: -20,

  },
  question_19: {
    a: 10,
    b: 5,
    c: 0,
    d: 15,
    e: -10,

  },
  //assimilation vs liberation
  question_20: {
    a: 1,
    b: -5,
    c: 10,
    d: 5,
    e: -10,

  },
  question_21: {
    a: 0,
    b: 0,
    c: 10,
    d: 0,
    e: -15,

  },
  question_22: {
    a: 0,
    b: 0,
    c: 5,
    d: 0,
    e: -10,

  },
  question_23: {
    a: 0,
    b: 0,
    c: 10,
    d: 0,
    e: -10,

  },
  question_24: {
    a: 0,
    b: 0,
    c: 5,
    d: 0,
    e: -10,

  },
  question_25: {
    a: 0,
    b: 10,
    c: -4,
    d: 0,
    e: 10,

  },
  question_26: {
    a: 12,
    b: 5,
    c: -5,
    d: 15,
    e: -15,

  },
  question_27: {
    a: -10,
    b: -5,
    c: 5,
    d: 5,
    e: -5,

  },
  question_28: {
    a: 14,
    b: 5,
    c: 0,
    d: 0,
    e: 0,

  },
  question_29: {
    a: 0,
    b: 0,
    c: 1,
    d: 0,
    e: 10,

  },
}

Object.size = function (obj) {
  let size = 0
  let key
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++
  }
  return size
}
