<?php
if(isset($_POST['inserisci']))
{
	$xml = new DomDocument("1.0","UTF-8");
	$xml ->load('astronauts.xml');

	$first_name = $_POST['first_name'];
	$middle_name = $_POST['middle_name'];
    $last_name = $_POST['last_name'];
	$mission = $_POST['mission'];
    $age = $_POST['age'];
    $gender  = $_POST['gender'];
    $color_eyes = $_POST['color_eyes'];
	$email = $_POST['email'];
    $tel = $_POST['tel'];
    $address = $_POST['address'];
    $weight = $_POST['weight'];
    $biography = $_POST['biography'];

// Load XML file
$xml = new DomDocument("1.0", "UTF-8");
$xmlFile = 'astronauts.xml';
if (file_exists($xmlFile)) {
    $xml->load($xmlFile);

    // Fetch <astronauts> tag
    $astronautsTag = $xml->getElementsByTagName("astronauts")->item(0);
    if ($astronautsTag === null) {
        // Handle if <astronauts> tag is not found
        echo "Error: <astronauts> tag not found in XML file.";
        exit;
    }
} else {
    // Handle if XML file doesn't exist
    echo "Error: XML file not found.";
    exit;
}

	$astronautsTag -> getElementsByTagName("astronauts")->item(0);
	
	$astronautTag = $xml-> createElement("astronaut");
		$first_nameTag = $xml-> createElement("first_nome", $first_name);
  		$middle_nameTag = $xml-> createElement("middle_nome", $middle_name);
		$last_nameTag = $xml-> createElement("last_nome", $last_name);
        $missionTag = $xml-> createElement("mission", $mission);
        $ageTag = $xml-> createElement("age", $age);
  		$genderTag = $xml-> createElement("gender", $gender);
        $color_eyesTag = $xml-> createElement("color_eyes", $color_eyes);
  		$emailTag = $xml-> createElement("email", $email);
        $telTag = $xml-> createElement("tel", $tel);
        $addressTag = $xml-> createElement("address", $address);
        $weightTag = $xml-> createElement("weight", $weight);
        $biographyTag = $xml-> createElement("biography", $biography);



		$astronautTag->appendChild($first_nameTag);
		$astronautTag->appendChild($middle_nameTag);
		$astronautTag->appendChild($last_nameTag);
		$astronautTag->appendChild($missionTag);
		$astronautTag->appendChild($ageTag);
		$astronautTag->appendChild($genderTag);
  		$astronautTag->appendChild($color_eyesTag);
		$astronautTag->appendChild($emailTag);
		$astronautTag->appendChild($telTag);
		$astronautTag->appendChild($addressTag);
  		$astronautTag->appendChild($weightTag);
		$astronautTag->appendChild($biographyTag);


				
	$astronautsTag->appendChild($astronautTag);
	$xml->save('astronauts.xml');
}

?>
<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Esercizio 1">
        <meta name="author" content="Luca Picciotto">
        <title>Document</title>
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700">
    
    </head>

    <body>
                <div id="login">
                
                <form action="https://envsyhfymq3ni.x.pipedream.net" method="post" name='form-login' >

                    <span class="fontawesome-lock">First name:</span>
                    <input type="text" name="first_name"  id="first_name" required>
<br>
                    <span class="fontawesome-lock">Middle name (optional): </span>
                    <input type="text" name="middle_name"  id="middle_name" >
<br>
                    <span class="fontawesome-lock">Last name: </span>
                    <input type="text" name="last_name" required >
<br>
                    <span class="fontawesome-lock">D. o. B.</span>
                    <!-- <label for="age">Age: </label> -->
                    <input type="date" name="age" id="age" min="21" max="40" required >
<br>
                    <!-- <span class="fontawesome-lock"></span> -->
                    <label for="male">Male 
                    <input type="radio" name="gender" id="male" value="male"></label>
                    

                    <!-- <span class="fontawesome-lock"></span> -->
                    <label for="female">Female
                    <input type="radio" name="gender" id="female" value="female" checked></label>
                    <br>
                    <br><br><br>



                    <span class="fontawesome-lock">Color of Eyes:</span>
                    <!-- <label for="color-eyes">Color of Eyes: </label> -->
                    <input type="color" name="color-eyes" id="color-eyes" value="#A52A2A">
<br>
                    <span class="fontawesome-lock">Selected the mission: </span>
                    <!-- <label for="mission">Mission: </label> -->
                    <select name="mission" id="mission" required>
                        <option value="Other">Other</option>
                        <option value="Moon">Moon</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Mars">Mars</option>
                        <option value="Venus">Venus</option>
                        <option value="Neptune">Neptune</option>
                        <option value="S-Moon">S-Moon</option>
                    </select>
<br>
                    <span class="fontawesome-lock" >Email: </span>
                    <input type="email" name="email" id="email" required>
<br>
                    <span class="fontawesome-lock">Telephon number: </span>
                    <input type="tel" name="tel" id="tel" >
<br>
                    <span class="fontawesome-lock">Address: </span>
                    <input type="text" name="address" id="address" >

<br>
                    <span class="fontawesome-lock">Your weight: </span>
                    <!-- <label for="weight">Weight:</label> -->
                    <input type="number" name="weight" id="weight"  max="100" min="60" required>
<br>
                    <span class="fontawesome-lock">Descrive me yourself: </span>
                    <!-- <label for="biography">Biography</label> -->
                    <textarea name="biography" id="biography" cols="15" maxlength="255" rows="5"></textarea>    
<br>
                    <button class="custom-btn btn-7" name="inserisci" id="inserisci" value="submit">Submit</button>
                </form>
        </div>
        <!-- <a href="astronauts.xml"> <button class="custom-btn btn-7">astronauts</button></a> -->
    </body>
</html>

