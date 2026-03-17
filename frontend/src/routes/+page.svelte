<style>

    * {
        text-align: center;
    }

    .title {
        margin: 0;
        margin-top: 30vh;
        padding: 0;

        font-family: 'Google Sans Code';
        font-size: 120px;
        color: rgb(255, 250, 186);
    }

    .subtitle {
        margin: 0;
        margin-top: 10px;
        padding: 0;
        font-family: 'Google Sans Code';
        font-size: 30px;
        color: rgb(255, 250, 186);
    }

    .button-field {
        margin: 0;
        padding: 0;
    }

    .button {
        font-family: 'Google Sans Code';
        margin: 0;
        margin-top: 60px;
        margin-left: 5px;
        margin-right: 5px;
        padding: 0;
        height: 50px;
        width: 100px;

        border: 0px;
        background: rgb(29, 29, 29);
        color: rgb(255, 254, 182);
        transition: 0.3s ease-in-out;
    }

    .button:hover {
        border-style: solid;
        border: 2px solid;
        border-color: rgb(255, 254, 182);
        transition: 0s ease-in-out;
    }

    .button:active {
        border-style: solid;
        border: 2px solid;
        border-color: rgb(255, 255, 247);
        filter: hue-rotate(90deg);
        transition: 0.2s ease-in-out;
    }

</style>

<script lang=ts>
    import '../app.css';
</script>


<main>
    <!--Title-->
    <title>Grapify</title>
    <!--Wordmark-->
    <div>
        <h1 class="title">GRAPIFY</h1>
    </div>
    <!--Tagline-->
    <div>
        <p class="subtitle">Keep your expenses in Check with GRAPIFY.</p>
    </div>
    <!--Login / Register Buttons-->
    <div class="button-field">
        <button class="button" title="button"> Log In </button>
        <button class="button" title="button"> Register </button>
    </div>
</main>