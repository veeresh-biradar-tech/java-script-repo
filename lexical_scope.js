// Lexical Scope In JS 

//Same Lexical Scope
function fun1()
{
    let a= 10
    console.log("This Is Function1 " +a)

    function fun2()
    {
        console.log("This Is Function2 " +a)
    }

    fun2()
}

fun1()


// Different lexical Scope
function outerFunction()
{
    let b= 20
    console.log(b)

    function innerFunction()
    {
        let b= 40
        console.log(b)
    }

    innerFunction()
}
outerFunction()


// No Lexical Scope
function outLier()
{
    // console.log(b)

    function inLier()
        {
             let b= 100
             console.log(b)
        }
    inLier()
}
outLier()