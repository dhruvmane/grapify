
<script lang=ts>
    import '../../app.css'
    import { useClerkContext } from 'svelte-clerk/client';
	import { onMount, untrack } from 'svelte';
    import gsap from 'gsap';

    import darkModeMoon from '$lib/assets/icons/darkmode-moon.svg'
    import darkModeSun from '$lib/assets/icons/darkmode-sun.svg'
    
    // Auth Context.
    const authCtx = useClerkContext()

    let netProfitField: HTMLElement;
    let isRed = $state(false)
    
    let currency = $state("$")
    let netProfit = $state(0)
    let initialNetProfit = $state(0)
    let transactionLog: {title: string, amount: number}[] = $state([])

    transactionLog = [
        {title: "Expense", amount: 300},
        {title: "Expense", amount: 300},
        {title: "Expense", amount: 300},
        {title: "Expense", amount: 300},
        {title: "Expense", amount: 300},
        {title: "Expense", amount: 300},
        {title: "Expense", amount: 300},
        {title: "Expense", amount: 300},
        {title: "Expense", amount: 300},
    ]

    // Formats Number in the INS: 3000 -> 3,000
    function format_number(number: number): string {
        let originalNumber = number.toString()
        let formatted_number = originalNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return formatted_number
    }

    
    // Animate when Balance goes Up or Down.
    function animateBalanceChange(from: number, to: number) {
        const animateBalance = {value: from}
        gsap.killTweensOf(animateBalance)
        gsap.to(animateBalance, {
            value: to,
            duration: 7,
            ease: 'power2.out',
            onUpdate() {
                initialNetProfit = animateBalance.value // Make it so that if the Logs update Rapidly, the Counter animation doesn't glitch.
                netProfitField.textContent = `${currency}` + format_number(Math.round(animateBalance.value));
            },

            onComplete() {
                initialNetProfit = to
            }
        })
    }

    // Update Transaction Log
    $state.snapshot(transactionLog)?.forEach(log => {
        netProfit += log.amount
    })

    $effect(() => {
        const balanceTo = netProfit
        untrack(() => {
            const balanceFrom = initialNetProfit
            animateBalanceChange(balanceFrom, balanceTo)
        })
        if (initialNetProfit < 0) {
            isRed = true; // set to Red if the Amount is Very Low
            document.documentElement.style.setProperty('--balance-color', 'rgb(255, 104, 99)')
        } else {
            isRed = false;
            document.documentElement.style.setProperty('--balance-color', 'rgb(138, 255, 138)')
        }
    })

    let TransactionLogsRef: HTMLElement[] = [];
    onMount(() => {
        let tl = gsap.timeline({defaults:{duration: 4.5}});
        TransactionLogsRef.forEach( (log: any) => {
            tl.from(log, {
                y: 25,
                opacity: 0,
                ease: "power2.inOut",
                duration: 1.5,
            }, "<0.1")
        })
    })

</script>

<main>
    <title>Dashboard | Grapify</title>
    <div class="balance-card">
        <h1 bind:this={netProfitField}>{currency}0</h1>
        <div class="balance-card-buttons">
            <button>+</button>
        </div>
    </div>
    <div class="transaction-log">
        <h1 class="transaction-title">Transactions</h1>
        <h1 class="transaction-amount">Amnt.</h1>
        {#each transactionLog as log, i}
            <div bind:this={TransactionLogsRef[i]} class="transaction-log-entry">
                <h1 class="transaction-log-entry-title">{log.title}</h1>
                <h1 class="transaction-log-entry-amount">{currency}{log.amount}</h1>
            </div>
        {/each}
    </div>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Boldonse&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Anton+SC&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&family=Notable&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Lekton:ital,wght@0,400;0,700;1,400&display=swap');

    :root {
        --balance-color: rgb(138, 255, 138);
    }

    * {
        font-family: 'Notable';
        text-align: center;
        color: rgb(255, 227, 190);
    }   

    .balance-card {

        justify-self: center;

        margin: 0;
        margin-top: 50px;
        padding: 12px;
        border: 5px solid;
        border-color: black;

        width: 850px;        

        background-color: rgb(12, 12, 12);
        border-radius: 20px;

        font-size: 30px;

        .balance-card-buttons {
            display: inline-block;
            margin-bottom: 15px;
            padding: 0;

            button  {
                margin: 0;
                padding-bottom: 2px;
                
                justify-self: center;
                
                background-color: rgb(24, 24, 24);
                border-radius: 100px;
                border: none;

                width: 50px;
                
                font-family: 'Google Sans Code';
                font-size: 35px;

                transition: 0.1s ease-in-out;
            }

            button:hover {
                transition: 0.1s ease-in-out;
                background-color: rgb(48, 48, 48);
            }

        }

        h1 {
            color: var(--balance-color);
        }
    }

    .transaction-log, .transaction-log * {
        pointer-events: auto;
    }

    .transaction-log {
        display: grid;

        pointer-events: auto; 
        border: 5px solid;
        border-color: black;

        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: rgb(255, 254, 191) black;
        grid-template-columns: 2fr 1fr;

        margin: 0;
        margin-top: 20px;
        padding: 12px;
        padding-bottom: 30px;
        justify-self: center;


        background-color: rgb(12, 12, 12);
        border-radius: 20px;
        width: 850px;
        height: 400px;

        .transaction-title {
            font-family: 'Lekton';
            justify-self: left;
            color: rgb(255, 255, 255);
            padding-left: 32px;
            font-size: 24px;
        }

        .transaction-amount {
            font-family: 'Lekton';
            font-size: 24px;
            justify-self: right;
            color: rgb(255, 255, 255);
            padding-right: 32px;
        }

        
        .transaction-log-entry {
            font-family: 'Lekton';
            font-size: 12px;

            background-color: rgb(36, 36, 36);
            display: grid;
            grid-column: 1 / -1; /* span all columns */
            grid-template-columns: subgrid;

            width: 800px;
            max-height: 70px;

            margin: 0;
            padding: 0;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 12px;
            border-radius: 20px;
            
            .transaction-log-entry-title {
                font-family: inherit;
                justify-self: left;
                padding-left: 32px;
                font-size: 24px;
            }
            
            .transaction-log-entry-amount {
                font-family: inherit;
                justify-self: right;
                padding-right: 32px;
                font-size: 24px;
            }
            
        }


    }

</style>
