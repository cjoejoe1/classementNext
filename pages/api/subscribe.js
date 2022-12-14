export default async (req,res) => {
  const {email} = req.query;

  if(!email){
    return res.status(400).json({error: "Email is required"})
  }

  console.log('email is', email)

  try{


    const FORM_ID = await process.env.CONVERTKIT_FORM_ID;
    const API_KEY = await process.env.CONVERTKIT_API_KEY;
    const API_URL = await process.env.CONVERTKIT_API_URL;

    const data = { email, api_key: API_KEY};


    const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {

      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"},
      method: "POST"
    });

    // return any error from CK

    if(response.status >= 400){
      return res.status(400).json({error: "There was an error subscribing to the list."})
    }

    return res.status(201).json({error: ''});
  }
  
  catch(error){
    console.log('i am in error')
    return res.status(500).json({error: error.message || error.toString()})
  }

}