<style>
    @import url('https://fonts.googleapis.com/css2?family=Boldonse&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Anton+SC&display=swap');

    * {
        text-align: center;
        color: rgb(255, 227, 190);
    }   

</style>

<script lang=ts>
    import '../../app.css'
    import { useClerkContext } from 'svelte-clerk/client';

    const authCtx = useClerkContext()
    console.log(authCtx)

    let isRed = $state(false)
    let netProfit = $state(format_number(3000))
    let transactionLog = $state([])

    // Formats Number in the INS: 3000 -> 3,000
    function format_number(number: number): String {
        // Initialize Values with 0
        let millions: number, thousands: number, hundreds: number, tens: number, ones: number = 0
        // Reverse the String.
        let numberValue: String = number.toString().split("").reverse().join("");
        let formatted_number = ""
        let commaStep: number = 0;
        
        // Add Comma Every Step:
        for (const char of numberValue) {
            if(commaStep == 3) {
                formatted_number += ","
                commaStep = 0;
            }
            formatted_number += char;
            commaStep++
        }

        // Re-Reverse the String.
        formatted_number = formatted_number.split("").reverse().join("");
        return formatted_number
    }


</script>

<main>
    <title>Dashboard | Grapify</title>
</main>