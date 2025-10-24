function reverseString(str)
{
    const inputText = document.getElementById("reverseInput").value;
    const reversed = "";

    for (let i = inputText.length - 1; i >= 0; i--)
    {
        reversed += inputText[i];
    }

    document.getElementById("reverseOutput").innerText = reversed;
}

function checkPalindrome()
{
    const inputText = document.getElementById("palindromeInput").value;
    const simple = val.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = "";

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
    const subtotal = document.getElementById("subtotal").value;
    const tipPercent = document.getElementById("tipPercent").value;

    subtotal = parseFloat(subtotal);
    tipPercent = parseFloat(tipPercent);

    const tip = subtotal * (tipPercent / 100);
    const total = subtotal + tip;

    document.getElementById("totalResult").innerHTML = "Total amount (including tip)K $" + total.toFixed(2);
}