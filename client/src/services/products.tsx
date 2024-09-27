import axios from 'axios'
const productsUrl = '/api/products'

export const fetchProducts = async () => {
  try {
    const response = await axios.get(productsUrl)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const addProduct = async (title: string, price: string, quantity: string) => {
  try {
    const response = await axios.post(productsUrl, {
      title: title,
      price: price,
      quantity: quantity
    })
    
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const updateProduct = async (id: string, title: string, price: string, quantity: string) => {
  try {
    const response = await axios.put(productsUrl + `/${id}`, {
      title: title,
      price: +price,
      quantity: +quantity
    })
    
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteProduct = async (id: string) => {
  try {
    await axios.delete(productsUrl + `/${id}`)
  } catch (error) {
    console.error(error)
  }
}


// BACK END ROUTES

// router.delete("/products/:id", (req, res, next) => {
//   const productId = req.params.id;
//   Product.findByIdAndRemove(productId)
//     .then(() => {
//       res.json();
//     })
//     .catch((err) => next(err));
// });

// FRONT END EXAMPLE

// const create_endpoint = async () => {
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: baseUrl + '/createbin',
  //     })
  //     return response.data
  //   } catch (error) {
  //     return
  //   }
  // }





// router.delete("/products/:id", (req, res, next) => {
//   const productId = req.params.id;
//   Product.findByIdAndRemove(productId)
//     .then(() => {
//       res.json();
//     })
//     .catch((err) => next(err));
// });

// router.post("/add-to-cart", (req, res, next) => {
//   const { productId } = req.body;
//   Product.findById(productId)
//     .then((product) => {
//       if (product.quantity === 0) {
//         product.error = "No more items";
//         return product;
//       }
//       return Product.findByIdAndUpdate(
//         productId,
//         {
//           quantity: product.quantity - 1,
//         },
//         { new: true }
//       );
//     })
//     .then((updatedProduct) => {
//       CartItem.findOne({
//         productId,
//       })
//         .then((item) => {
//           if (updatedProduct.error) {
//             return item;
//           }
//           if (!item) {
//             return CartItem.create({
//               title: updatedProduct.title,
//               price: updatedProduct.price,
//               quantity: 1,
//               productId,
//             });
//           } else {
//             return CartItem.findOneAndUpdate(
//               { productId },
//               {
//                 quantity: item.quantity + 1,
//               },
//               { new: true }
//             );
//           }
//         })
//         .then((item) => {
//           const { error, ...product } = updatedProduct.toObject();
//           res.json({ product, item });
//         });
//     });
// });

// router.post("/checkout", (req, res) => {
//   CartItem.deleteMany({}).then(() => {
//     res.json();
//   });
// });

// router.get("/cart", (req, res, next) => {
//   CartItem.find({})
//     .then((cartItems) => {
//       res.json(cartItems);
//     })
//     .catch(next);
// });

// module.exports = router;





// import axios from 'axios'
// const baseUrl = '/api'

// const create_endpoint = async () => {
//   try {
//     const response = await axios({
//       method: 'post',
//       url: baseUrl + '/createbin',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json'
//       }
//     })
//     return response.data
//   } catch (error) {
//     return
//   }
// }
// const requests = async (binId: string) => {
//   try {
//     const response = await axios.get(baseUrl + `/bin/${binId}`);
//     return response;
//   } catch (error) {
//     return
// }
// }

// const sendRandomRequest = async function(body: string, endpoint: string) {
//   try {
//     const response = await axios({
//       method: getRandomElement(httpMethods),
//       url: 'https://' + endpoint + '.jjjones.dev',
//       data: body.replaceAll('\n', ' '),
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json'
//       }
//     })
//   } catch (error) {
//     return {error: error}
//   }
// }

// export default { create_endpoint, requests, sendRandomRequest };
