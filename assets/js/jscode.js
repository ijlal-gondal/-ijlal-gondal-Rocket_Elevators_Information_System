// src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"


        // '[name="buildingtype"]'

        $(document).ready(function() {
        $("#numberofapartments").hide();
        $("#numberofloors").hide();
        $("#numberofbasements").hide();
        $("#numberofbusinesses").hide();
        $("#numberofparkingspaces").hide();
        $("#numberofelevatorcages").hide();
        $("#numberoftenantcompanies").hide();
        $("#numberofoccupants").hide();
        $("#numberofhours").hide();
        
        
    
        
        
$("#buildingtype").change(function() {
    if ($("#buildingtype").val() === "1") {
            $("#numberofapartments").show();
        $("#numberofloors").show();
        $("#numberofbasements").show();
        $("#numberofbusinesses").hide();
        $("#numberofparkingspaces").hide();
        $("#numberofelevatorcages").hide();
        $("#numberoftenantcompanies").hide();
        $("#numberofoccupants").hide();
        $("#numberofhours").hide();
        }
    else if ($("#buildingtype").val() === "2") {
            $("#numberofapartments").hide();
        $("#numberofloors").show();
        $("#numberofbasements").show();
        $("#numberofbusinesses").show();
        $("#numberofparkingspaces").show();
        $("#numberofelevatorcages").show();
        $("#numberoftenantcompanies").hide();
        $("#numberofoccupants").hide();
        $("#numberofhours").hide();
        }
    else if ($("#buildingtype").val() === "3") {
            $("#numberofapartments").hide();
        $("#numberofloors").show();
        $("#numberofbasements").show();
        $("#numberofbusinesses").hide();
        $("#numberofparkingspaces").show();
        $("#numberofelevatorcages").hide();
        $("#numberoftenantcompanies").show();
        $("#numberofoccupants").show();
        $("#numberofhours").hide();
        }
    else if ($("#buildingtype").val() === "4") {
            $("#numberofapartments").hide();
        $("#numberofloors").show();
        $("#numberofbasements").show();
        $("#numberofbusinesses").show();
        $("#numberofparkingspaces").show();
        $("#numberofelevatorcages").hide();
        $("#numberoftenantcompanies").hide();
        $("#numberofoccupants").show();
        $("#numberofhours").show();
        }
    })
    });
$(document).ready(function() {
            $('#numberofelevatorcage').change(function () {
                $('#numberofelevators').val($(this).val());
            });
    });


$(document).ready(function() {
            $('#residential').change(function () {
                var $numberofapartment = $("#numberofapartment").val();
                var $numberoffloor = $("#numberofloor").val();
                var $avg = $numberofapartment / $numberoffloor;
                var numofelevator = $avg / 6;
                var column = Math.ceil($numberoffloor / 20);
                numofelevator *= column;
                $('#numberofelevators').val(Math.ceil(numofelevator));
            });
            });
    $(document).ready(function() {
            $('#numberofoccupant').change(function () {
                var $numberofoccupant = $("#numberofoccupant").val();
                var $numberoffloor = $("#numberofloor").val();
                var $numberofbasement = $("#numberofbasement").val();
                var $totalfloor = parseInt($numberoffloor) + parseInt($numberofbasement);
                var $avg = $numberofoccupant * $totalfloor;
                var numofelevator = $avg / 1000;
                var column = Math.ceil($totalfloor / 20);
                numofelevator = (Math.ceil(numofelevator / column)) * column;
                $('#numberofelevators').val(Math.ceil(numofelevator));
            });
        
            });
        
        
$(document).ready(function(){
            $("input[type='radio']").click(function () {
                ProductLine = $("input[name='radio-btn']:checked").val();
                // console.log('apart', ProductLine );
                if (ProductLine === "standard") {
                    var stdunitcost = 7565;
                    $("#unitcost").val(stdunitcost);
                    var stdinstallationcost = (0.10 * stdunitcost * $("#numberofelevators").val()).toFixed(2);
                    $("#installationcost").val(stdinstallationcost);

                    // console.log('apar', $("#unitcost").val());
                }
                else if (ProductLine === "premium") {
                    var prmunitcost = 12345;
                    $("#unitcost").val(prmunitcost);
                    var prminstallationcost = (0.13 * prmunitcost * $("#numberofelevators").val()).toFixed(2);
                    $("#installationcost").val(prminstallationcost);

                    // console.log('unit', $("#unitcost").val());
                }
                else if ($(ProductLine === "excelium")) {
                    var excunitcost = 15400;
                    $("#unitcost").val(excunitcost);
                    var excinstallationcost = (0.16 * excunitcost * $("#numberofelevators").val()).toFixed(2);
                    $("#installationcost").val(excinstallationcost);

                    // console.log('unitc', $("#unitcost").val());
                }
            });
        });
        
$("input[type='button']").click(function() {
            //  console.log("tip", $("#unitcost").val());
            // console.log("to", $("#numberofelevators").val());
            // 	console.log("t", $("#installationcost").val())
            finalunitcost = $("#unitcost").val();
        finalnumberofelevators = $("#numberofelevators").val();
        finalinstallationcost = $("#installationcost").val();
        
        var totalcost = (parseInt(finalunitcost) * parseInt(finalnumberofelevators)) + parseInt(finalinstallationcost);
            //  console.log("total", totalcost);
        $("#totalcost").val(totalcost);
        
        });
        
        
        
        
        
