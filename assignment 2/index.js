function reverseString()
{
    let inputText = document.getElementById("reverseInput").value;
    let reversed = "";

    for (let i = inputText.length - 1; i >= 0; i--)
    {
        reversed += inputText[i];
    }

    document.getElementById("reversedResult").innerText = reversed;
}

function checkPalindrome()
{
    let inputText = document.getElementById("palindromeInput").value;
    let simple = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = "";

    for (let i = simple.length - 1; i >= 0; i--)
    {
        reversed += simple[i];
    }

    if (simple === reversed)
    {
        document.getElementById("palindromeResult").innerText = inputText + " is a palindrome.";
    }
    else
    {
        document.getElementById("palindromeResult").innerText = inputText + " is not a palindrome.";
    }
    
}

function calculateTotal()
{
    let subtotal = document.getElementById("subtotal").value;
    let tipPercent = document.getElementById("tipPercentage").value;

    subtotal = parseFloat(subtotal);
    tipPercent = parseFloat(tipPercent);

    let tip = subtotal * (tipPercent / 100);
    let total = subtotal + tip;

    document.getElementById("totalResult").innerHTML = "Total amount (including tip): $" + total.toFixed(2);
}