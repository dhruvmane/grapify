<style>
    @import url('https://fonts.googleapis.com/css2?family=Boldonse&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Anton+SC&display=swap');

    * {
        text-align: center;
        color: rgb(255, 227, 190);
    }   

    .netProfit-field {
        font-family: 'Gravitas One';
        font-size: 100px;
        margin: 0;
        margin-top: 10vh;
        margin-left: 575px;
        margin-right: 575px;
        padding: 0;
        background-color: rgb(24, 24, 24);
    }

    .netProfit-green {
        color: rgb(137, 255, 137);
    }

    .netProfit-red {
        color: rgb(255, 107, 107);
    }

    .transactionLog-field {
        font-family: 'Google Sans Code';
        font-size: 20px;

        margin: 0;
        padding: 0;
        padding-left: 135px;
        padding-right: 135px;
        padding-bottom: 600px;
        background-color: black;
    }

    .ux {
        display: inline-block;
    }

</style>

<script lang=ts>
    import '../../app.css'

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