
const replaceAll = (string, oldd, newd) => {
    let breaker = 1
    do {
  
      if (string.indexOf(oldd) !== -1) {
        string = string.replace(oldd, newd)
        breaker++
      } else {
        break
      }
  
    } while (breaker <= 200 * 200);
  
    return string
  }
  const replaceAll_Arr = (arr, oldd, newd) => {
    let breaker = 1
    do {
  
      if (arr.indexOf(oldd) !== -1) {
        const index = arr.indexOf(oldd);
        arr[index] = newd
        breaker++
      } else {
        break
      }
  
    } while (breaker <= 200 * 200);
  
    return arr
  }
  
  //{} <= conditions separator 
  
  let cosa = replaceAll("{1 = 2} & {3 <= 4}", " ", "").split("");
  
  
  const clear_arr = (arr, pair) => {
    for (let i = pair[0] - 1; i < pair[1] + 1; i++) {
      arr[i] = undefined
    }
  
    return arr
  }
  
  
  const slice_conditions = (arr) => {
    const conditions = [];
    let arr_aux = arr;
    if (arr_aux.indexOf("{") !== -1) {
      let breaker = 1
      do {
  
        if (arr_aux.indexOf("{") !== -1) {
          const pair = [arr_aux.indexOf("{") + 1, arr_aux.indexOf("}")];
          conditions.push(arr_aux.slice(arr_aux.indexOf("{") + 1, arr_aux.indexOf("}")))
          if(arr_aux[arr_aux.indexOf("}") + 1] !== undefined){
            conditions.push(arr_aux[arr_aux.indexOf("}") + 1])
          }
          arr_aux = clear_arr(arr_aux, pair)
          breaker++
        } else {
          break
        }
  
      } while (breaker <= 200 * 200);
  
  
  
  
      // console.log(arr_aux.slice(arr_aux.indexOf("{") + 1 , arr_aux.indexOf("}")));
    }else{
      return arr
    }
  
    return conditions
  }
  
  
  
  // let conditions = slice_conditions(cosa)
  
  
  
  
  const build_condition = (arr) => {
    console.clear()
    console.log(arr);
  
    let breaker = 1
    do {
  
  
      if (arr.indexOf("=") !== -1) {
        const index = arr.indexOf("=");
        if (arr[index - 1] == "<" || arr[index - 1] == ">") {
          arr[index] = undefined
          arr[index - 1] += "and"
        }else{
          arr[index] = "and"
        }
  
        // arr[index] = newd
        breaker++
      } else {
        break
      }
  
    } while (breaker <= 200 * 200);
  
    arr = arr.filter(ent => ent != undefined);
    arr = slice_conditions(arr)
  
  
  
  
  
  
  
  
    console.log(arr);
    // arr = replaceAll_Arr(arr,"<")
  
  }
  
  build_condition(cosa);