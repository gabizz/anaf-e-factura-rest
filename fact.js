// 20220603084029
// https://webserviceapl.anaf.ro/prod/FCTEL/rest/listaMesajeFactura?zile=60&cif=34612616


const fact =  function(data) {
       let mess = data.mesaje || []
      let getRes = (d) => d.reduce( (acc,el) => {
        let cui = el.detalii.split("cif_beneficiar=")[1]
        console.log(cui)
        if (!acc.hasOwnProperty(cui)) {
            acc = {
                ...acc,
                [cui]: {
                    count: 1,
                    items: [el]
                }
                    
                
            }
        } else {
            acc = {
                ...acc,
                [cui]: {
                    count: acc[cui].items.length + 1,
                    items: [...acc[cui].items, el]
                }
            }
        }
        console.log("count:", Object.keys(acc).length)
        return acc

      }, {})

      return getRes(mess)

      


  }

