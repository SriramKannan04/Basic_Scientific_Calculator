function handleEqualClick() 
  {
    try 
    {
      const result = eval(inputValue);
      setOutputValue(result);
    } 
    catch (err) 
    {
      alert("Try to provide valid inputs");
      setInputValue('');
      setOutputValue('');
      return;
    }
  
    try
    {
      let sanitizedInputValue = inputValue.replace(/([+*/-])+/g, '$1');
      const result = eval(sanitizedInputValue);
      setOutputValue(result);
    } 
    catch (err) 
    {
      alert("An error occurred while evaluating the expression");
      setInputValue('');
      setOutputValue('');
    }
  }