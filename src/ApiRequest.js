const ApiRequest = async (url = '', optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj )
    if (!response.ok) throw Error('Please Reload the app')

  } catch (err) {
    errMsg = err.Message
  } finally {
return errMsg
  }
}

export default ApiRequest