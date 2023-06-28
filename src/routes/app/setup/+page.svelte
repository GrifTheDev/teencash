<script lang="ts">
  import type { ActionData } from "./$types";

  export let form: ActionData;
  let numberOfWallets = 1;
  let emptyArray = Array(numberOfWallets)

  function validateNumInput() {
    console.log(numberOfWallets)
    if (numberOfWallets < 1 || numberOfWallets == null) {
      numberOfWallets = 1;
    }

    emptyArray = Array(numberOfWallets)
  }

  export { numberOfWallets as numberOfWallets };
  export {emptyArray as emptyArray}
</script>

<div class="flex justify-center items-center h-screen">
  <div class="w-1/3">
    <h1 class="text-center text-5xl m-3">Welcome to TeenCash!</h1>
    <p class="text-center text-lg">Let's get you up and running.</p>

    {#if form?.message}
      <div class="flex justify-center">
        <div
          class="border-solid border-2 border-black rounded bg-gray-400 text-white w-1/4 text-center"
        >
          <p>{form.message}</p>
        </div>
      </div>
    {/if}

    <form
      action="?/setup"
      method="post"
      novalidate
      class="border-solid border-2 border-black rounded m-1 p-1 text-center"
    >
      <p class="text-lg">1. Number of Wallets</p>
      <p class="text-sm">
        TeenCash tracks your balance through wallets. Wallets are seperate
        accounts (like cash or card) that are added together to form the master
        balance (the total amount of money you have).
      </p>
      <div class="flex justify-center">
        <input
          name="wallets"
          type="number"
          class="border-solid border-2 border-black rounded w-12"
          bind:value={numberOfWallets}
          on:input={validateNumInput}
        />
      </div>

      <p class="text-lg">2. Currency</p>
      <div class="flex justify-center">
        <select
          name="currency"
          class="border-solid border-2 border-black rounded text-center"
        >
          <option>United Arab Emirates d (د.إ)</option>
          <option>Afghan afghani (؋)</option>
          <option>Albanian lek (L)</option>
          <option>Armenian dram (AMD)</option>
          <option>Netherlands Antillean gu (ƒ)</option>
          <option>Angolan kwanza (Kz)</option>
          <option>Argentine peso ($)</option>
          <option>Australian dollar ($)</option>
          <option>Aruban florin (Afl.)</option>
          <option>Azerbaijani manat (AZN)</option>
          <option>Bosnia and Herzegovina (KM)</option>
          <option>Barbadian dollar ($)</option>
          <option>Bangladeshi taka (৳ )</option>
          <option>Bulgarian lev (лв.)</option>
          <option>Bahraini dinar (.د.ب)</option>
          <option>Burundian franc (Fr)</option>
          <option>Bermudian dollar ($)</option>
          <option>Brunei dollar ($)</option>
          <option>Bolivian boliviano (Bs.)</option>
          <option>Brazilian real (R$)</option>
          <option>Bahamian dollar ($)</option>
          <option>Bhutanese ngultrum (Nu.)</option>
          <option>Botswana pula (P)</option>
          <option>Belarusian ruble (Br)</option>
          <option>Belize dollar ($)</option>
          <option>Canadian dollar ($)</option>
          <option>Congolese franc (Fr)</option>
          <option>Swiss franc (CHF)</option>
          <option>Chilean peso ($)</option>
          <option>Chinese yuan (¥)</option>
          <option>Colombian peso ($)</option>
          <option>Costa Rican colón (₡)</option>
          <option>Cuban convertible peso') ($)</option>
          <option>Cuban peso ($)</option>
          <option>Cape Verdean escudo ($)</option>
          <option>Czech koruna (Kč)</option>
          <option>Djiboutian franc (Fr)</option>
          <option>Danish krone (DKK)</option>
          <option>Dominican peso (RD$)</option>
          <option>Algerian dinar (د.ج)</option>
          <option>Egyptian pound (EGP)</option>
          <option>Eritrean nakfa (Nfk)</option>
          <option>Ethiopian birr (Br)</option>
          <option>Euro (€)</option>
          <option>Fijian dollar ($)</option>
          <option>Falkland Islands pound (£)</option>
          <option>Pound sterling (£)</option>
          <option>Georgian lari (₾)</option>
          <option>Guernsey pound (£)</option>
          <option>Ghana cedi (₵)</option>
          <option>Gibraltar pound (£)</option>
          <option>Gambian dalasi (D)</option>
          <option>Guinean franc (Fr)</option>
          <option>Guatemalan quetzal (Q)</option>
          <option>Guyanese dollar ($)</option>
          <option>Hong Kong dollar ($)</option>
          <option>Honduran lempira (L)</option>
          <option>Haitian gourde (G)</option>
          <option>Hungarian forint (Ft)</option>
          <option>Indonesian rupiah (Rp)</option>
          <option>Israeli new shekel (₪)</option>
          <option>Manx pound (£)</option>
          <option>Indian rupee (₹)</option>
          <option>Iraqi dinar (ع.د)</option>
          <option>Iranian rial (﷼)</option>
          <option>Iranian toman (تومان)</option>
          <option>Icelandic króna (kr.)</option>
          <option>Jersey pound (£)</option>
          <option>Jamaican dollar ($)</option>
          <option>Jordanian dinar (د.ا)</option>
          <option>Japanese yen (¥)</option>
          <option>Kenyan shilling (KSh)</option>
          <option>Kyrgyzstani som (сом)</option>
          <option>Cambodian riel (៛)</option>
          <option>Comorian franc (Fr)</option>
          <option>North Korean won (₩)</option>
          <option>South Korean won (₩)</option>
          <option>Kuwaiti dinar (د.ك)</option>
          <option>Cayman Islands dollar ($)</option>
          <option>Kazakhstani tenge (₸)</option>
          <option>Lao kip (₭)</option>
          <option>Lebanese pound (ل.ل)</option>
          <option>Sri Lankan rupee (රු)</option>
          <option>Liberian dollar ($)</option>
          <option>Lesotho loti (L)</option>
          <option>Libyan dinar (ل.د)</option>
          <option>Moroccan dirham (د.م.)</option>
          <option>Moldovan leu (MDL)</option>
          <option>Malagasy ariary (Ar)</option>
          <option>Macedonian denar (ден)</option>
          <option>Burmese kyat (Ks)</option>
          <option>Mongolian tögrög (₮)</option>
          <option>Macanese pataca (P)</option>
          <option>Mauritanian ouguiya (UM)</option>
          <option>Mauritian rupee (₨)</option>
          <option>Maldivian rufiyaa (.ރ)</option>
          <option>Malawian kwacha (MK)</option>
          <option>Mexican peso ($)</option>
          <option>Malaysian ringgit (RM)</option>
          <option>Mozambican metical (MT)</option>
          <option>Namibian dollar (N$)</option>
          <option>Nigerian naira (₦)</option>
          <option>Nicaraguan córdoba (C$)</option>
          <option>Norwegian krone (kr)</option>
          <option>Nepalese rupee (₨)</option>
          <option>New Zealand dollar ($)</option>
          <option>Omani rial (ر.ع.)</option>
          <option>Panamanian balboa (B/.)</option>
          <option>Papua New Guinean kina (K)</option>
          <option>Philippine peso (₱)</option>
          <option>Pakistani rupee (₨)</option>
          <option>Polish złoty (zł)</option>
          <option>Transnistrian ruble (р.)</option>
          <option>Paraguayan guaraní (₲)</option>
          <option>Qatari riyal (ر.ق)</option>
          <option>Romanian leu (lei)</option>
          <option>Serbian dinar (рсд)</option>
          <option>Russian ruble (₽)</option>
          <option>Rwandan franc (Fr)</option>
          <option>Saudi riyal (ر.س)</option>
          <option>Solomon Islands dollar') ($)</option>
          <option>Seychellois rupee (₨)</option>
          <option>Sudanese pound (ج.س.)</option>
          <option>Swedish krona (kr)</option>
          <option>Singapore dollar ($)</option>
          <option>Saint Helena pound (£)</option>
          <option>Sierra Leonean leone (Le)</option>
          <option>Somali shilling (Sh)</option>
          <option>Surinamese dollar ($)</option>
          <option>South Sudanese pound (£)</option>
          <option>São Tomé and Príncipe d (Db)</option>
          <option>Syrian pound (ل.س)</option>
          <option>Swazi lilangeni (L)</option>
          <option>Thai baht (฿)</option>
          <option>Tajikistani somoni (ЅМ)</option>
          <option>Turkmenistan manat (m)</option>
          <option>Tunisian dinar (د.ت)</option>
          <option>Tongan paʻanga (T$)</option>
          <option>Turkish lira (₺)</option>
          <option>Trinidad and Tobago doll ($)</option>
          <option>New Taiwan dollar (NT$)</option>
          <option>Tanzanian shilling (Sh)</option>
          <option>Ukrainian hryvnia (₴)</option>
          <option>Ugandan shilling (UGX)</option>
          <option>United States (US) dolla ($)</option>
          <option>Uruguayan peso ($)</option>
          <option>Uzbekistani som (UZS)</option>
          <option>Venezuelan bolívar (Bs F)</option>
          <option>Bolívar soberano (Bs.S)</option>
          <option>Vietnamese đồng (₫)</option>
          <option>Vanuatu vatu (Vt)</option>
          <option>Samoan tālā (T)</option>
          <option>Central African CFA fr (CFA)</option>
          <option>East Caribbean dollar ($)</option>
          <option>West African CFA franc (CFA)</option>
          <option>CFP franc (Fr)</option>
          <option>Yemeni rial (﷼)</option>
          <option>South African rand (R)</option>
          <option>Zambian kwacha (ZK)</option>
        </select>
      </div>

      <p class="text-lg">3. Wallets</p>
      <p class="text-sm">
        Input the name of the wallet in the first box, and the amount of money in that wallet in the second box.
      </p>
        <!-- <div class="flex justify-center"></div> -->
        {#each emptyArray as _, i}
            <p class="text-base">Wallet #{i + 1}</p>
            <div class="flex justify-center">
              <input
                name={"walletName_" + { i }}
                type="text"
                class="border-solid border-2 border-black rounded"
              />
              <input
                name={"walletAmount_" + { i }}
                type="number"
                class="border-solid border-2 border-black rounded w-14"
              />
            </div>

              
        {/each}

      <button type="submit" class="m-2 border-2 border-gray-600 rounded"
        >Let's go!</button
      >
    </form>
  </div>
</div>
