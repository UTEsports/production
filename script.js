retrieveMaps();    
    localStorage.setItem('bo3m1winner', 'null');
    localStorage.setItem('bo3m2winner', 'null');
    localStorage.setItem('bo3m3winner', 'null');

    localStorage.setItem('bo5m1winner', 'null');
    localStorage.setItem('bo5m2winner', 'null');
    localStorage.setItem('bo5m3winner', 'null');
    localStorage.setItem('bo5m4winner', 'null');
    localStorage.setItem('bo5m5winner', 'null');
    
    function convertToFileName(userInput) {
        if (!userInput) {
            return "";
        }

        // Convert user input to uppercase and remove spaces
        const cleanedInput = userInput.replace(/ /g, '');

        // Replace apostrophes with an empty string
        const fileName = cleanedInput.replace(/['’]/g, '');

        return fileName;
    }

    function setMapMode(map, divId){
        const control = [
            "Control",
            "Busan",
            "Ilios",
            "Lijiang Tower",
            "Nepal",
            "Oasis",
            "Samoa",
            "Antarctic Peninsula"
        ];
        const escort = [
            "Escort",
            "Circuit Royal",
            "Dorado",
            "Havana",
            "Junkertown",
            "Rialto",
            "Route 66",
            "Shambali Monastery",
            "Watchpoint: Gibraltar"
        ]
        const hybrid = [
            "Hybrid",
            "Blizzard World",
            "Eichenwalde",
            "Hollywood",
            "King’s Row",
            "Midtown",
            "Numbani",
            "Paraiso",
        ];
        const push = [
            "Push",
            "Colosseo",
            "Esperanca",
            "New Queen Street",
        ];

        const flashpoint = [
            "Flashpoint",
            "New Junk City",
            "Suravasa"
        ];

        const clash = [
            "Clash",
            "Hanaoka"
        ]

        if(control.includes(map)){
            localStorage.setItem(divId + 'icon', 'assets\\ow_maps\\modeicon_control.png');
            localStorage.setItem(divId + 'mode', 'control');
        }else if(escort.includes(map)){
            localStorage.setItem(divId + 'icon', 'assets\\ow_maps\\modeicon_escort.png');
            localStorage.setItem(divId + 'mode', 'escort');
        }else if(hybrid.includes(map)){
            localStorage.setItem(divId + 'icon', 'assets\\ow_maps\\modeicon_hybrid.png');
            localStorage.setItem(divId + 'mode', 'hybrid');
        }else if(push.includes(map)){
            localStorage.setItem(divId + 'icon', 'assets\\ow_maps\\modeicon_push.png');
            localStorage.setItem(divId + 'mode', 'push');
        }else if(flashpoint.includes(map)){
            localStorage.setItem(divId + 'icon', 'assets\\ow_maps\\modeicon_flashpoint.png');
            localStorage.setItem(divId + 'mode', 'flashpoint');
        }else if(clash.includes(map)){
            localStorage.setItem(divId + 'icon', 'assets\\ow_maps\\modeicon_clash.png');
            localStorage.setItem(divId + 'mode', 'clash');
        }
    }

    function setScore(){
        var format = localStorage.getItem('mapset');
        if(format == 'bo3'){
            var bo3scores = [localStorage.getItem('bo3m1winner'), localStorage.getItem('bo3m2winner'), localStorage.getItem('bo3m3winner')]

            var t1Count = bo3scores.filter(function(item) {
                return item === 't1';
            }).length

            localStorage.setItem('t1score', t1Count);

            var t2Count = bo3scores.filter(function(item) {
                return item === 't2';
            }).length

            localStorage.setItem('t2score', t2Count);

            var miniscore = document.getElementById('miniscore');
            miniscore.innerHTML = t1Count + " - " + t2Count;
        }else{
            var bo5scores = [localStorage.getItem('bo5m1winner'), localStorage.getItem('bo5m2winner'), localStorage.getItem('bo5m3winner'), localStorage.getItem('bo5m4winner'), localStorage.getItem('bo5m5winner')]

            var t1Count = bo5scores.filter(function(item) {
                return item === 't1';
            }).length

            localStorage.setItem('t1score', t1Count);

            var t2Count = bo5scores.filter(function(item) {
                return item === 't2';
            }).length

            localStorage.setItem('t2score', t2Count);

            var miniscore = document.getElementById('miniscore');
            miniscore.innerHTML = t1Count + " - " + t2Count;
        }
        
    }

    function retrieveMaps(){
        setScore();
        var logo1 = document.getElementById('logo1');
        logo1.src = localStorage.getItem('t1_logo');

        var logo2 = document.getElementById('logo2');
        logo2.src = localStorage.getItem('t2_logo');

        var format = localStorage.getItem('mapset');
        var mapset = document.getElementById('mapset');
        mapset.src="assets\\ow_maps\\map_" + format + "_box.png";
        var bo3Divs = document.querySelectorAll('.bo3');
        var bo5Divs = document.querySelectorAll('.bo5');
        if (format === 'bo3') {
            bo3Divs.forEach(function(div) {
                div.style.display = 'block';
            });
            bo5Divs.forEach(function(div) {
                div.style.display = 'none';
            });
        } else if (format === 'bo5') {
            bo3Divs.forEach(function(div) {
                div.style.display = 'none';
            });
            bo5Divs.forEach(function(div) {
                div.style.display = 'block';
            });
        }

        // BO3 Map 1
        var bo3m1State = localStorage.getItem('bo3m1_state');   
        var bo3m1 = localStorage.getItem('bo3m1_map1_bo3');
        var bo3m1path = "assets\\ow_maps\\bo3\\" + convertToFileName(bo3m1) + ".png";
        var bo3m1display = document.getElementById('bo3m1display');
        bo3m1display.src = bo3m1path;
        setMapMode(bo3m1,'bo3m1state');
        var bo3m1StateDiv = document.getElementById('bo3m1state');
        var bo3m1scores = localStorage.getItem('bo3m1_team1_map1_score') + "-" + localStorage.getItem('bo3m1_team2_map1_score');
        setDivState('bo3m1state', localStorage.getItem('bo3m1_state'), bo3m1scores, bo3m1, 'bo3m1', 'map1');

        // BO3 Map 2
        var bo3m2State = localStorage.getItem('bo3m2_state');   
        var bo3m2 = localStorage.getItem('bo3m2_map2_bo3');
        var bo3m2path = "assets\\ow_maps\\bo3\\" + convertToFileName(bo3m2) + ".png";
        var bo3m2display = document.getElementById('bo3m2display');
        bo3m2display.src = bo3m2path;
        setMapMode(bo3m2,'bo3m2state');
        var bo3m2StateDiv = document.getElementById('bo3m2state');
        var bo3m2scores = localStorage.getItem('bo3m2_team1_map2_score') + "-" + localStorage.getItem('bo3m2_team2_map2_score');
        setDivState('bo3m2state', localStorage.getItem('bo3m2_state'), bo3m2scores, bo3m2, 'bo3m2', 'map2');

        // BO3 Map 3
        var bo3m3State = localStorage.getItem('bo3m3_state');   
        var bo3m3 = localStorage.getItem('bo3m3_map3_bo3');
        var bo3m3path = "assets\\ow_maps\\bo3\\" + convertToFileName(bo3m3) + ".png";
        var bo3m3display = document.getElementById('bo3m3display');
        bo3m3display.src = bo3m3path;
        setMapMode(bo3m3,'bo3m3state');
        var bo3m3StateDiv = document.getElementById('bo3m3state');
        var bo3m3scores = localStorage.getItem('bo3m3_team1_map3_score') + "-" + localStorage.getItem('bo3m3_team2_map3_score');
        setDivState('bo3m3state', localStorage.getItem('bo3m3_state'), bo3m3scores, bo3m3, 'bo3m3', 'map3');

        // BO5 Map 1
        var bo5m1State = localStorage.getItem('bo5m1_state');   
        var bo5m1 = localStorage.getItem('bo5m1_map1_bo5');
        var bo5m1path = "assets\\ow_maps\\bo5\\" + convertToFileName(bo5m1) + ".png";
        var bo5m1display = document.getElementById('bo5m1display');
        bo5m1display.src = bo5m1path;
        setMapMode(bo5m1,'bo5m1state');
        var bo5m1StateDiv = document.getElementById('bo5m1state');
        var bo5m1scores = localStorage.getItem('bo5m1_team1_map1_score') + "-" + localStorage.getItem('bo5m1_team2_map1_score');
        setDivState('bo5m1state', localStorage.getItem('bo5m1_state'), bo5m1scores, bo5m1, 'bo5m1', 'map1');

        // BO5 Map 2
        var bo5m2State = localStorage.getItem('bo5m2_state');   
        var bo5m2 = localStorage.getItem('bo5m2_map2_bo5');
        var bo5m2path = "assets\\ow_maps\\bo5\\" + convertToFileName(bo5m2) + ".png";
        var bo5m2display = document.getElementById('bo5m2display');
        bo5m2display.src = bo5m2path;
        setMapMode(bo5m2,'bo5m2state');
        var bo5m2StateDiv = document.getElementById('bo5m2state');
        var bo5m2scores = localStorage.getItem('bo5m2_team1_map2_score') + "-" + localStorage.getItem('bo5m2_team2_map2_score');
        setDivState('bo5m2state', localStorage.getItem('bo5m2_state'), bo5m2scores, bo5m2, 'bo5m2', 'map2');

        // BO5 Map 3
        var bo5m3State = localStorage.getItem('bo5m3_state');   
        var bo5m3 = localStorage.getItem('bo5m3_map3_bo5');
        var bo5m3path = "assets\\ow_maps\\bo5\\" + convertToFileName(bo5m3) + ".png";
        var bo5m3display = document.getElementById('bo5m3display');
        bo5m3display.src = bo5m3path;
        setMapMode(bo5m3,'bo5m3state');
        var bo5m3StateDiv = document.getElementById('bo5m3state');
        var bo5m3scores = localStorage.getItem('bo5m3_team1_map3_score') + "-" + localStorage.getItem('bo5m3_team2_map3_score');
        setDivState('bo5m3state', localStorage.getItem('bo5m3_state'), bo5m3scores, bo5m3, 'bo5m3', 'map3');

        // BO5 Map 4
        var bo5m4State = localStorage.getItem('bo5m4_state');   
        var bo5m4 = localStorage.getItem('bo5m4_map4_bo5');
        var bo5m4path = "assets\\ow_maps\\bo5\\" + convertToFileName(bo5m4) + ".png";
        var bo5m4display = document.getElementById('bo5m4display');
        bo5m4display.src = bo5m4path;
        setMapMode(bo5m4,'bo5m4state');
        var bo5m4StateDiv = document.getElementById('bo5m4state');
        var bo5m4scores = localStorage.getItem('bo5m4_team1_map4_score') + "-" + localStorage.getItem('bo5m4_team2_map4_score');
        setDivState('bo5m4state', localStorage.getItem('bo5m4_state'), bo5m4scores, bo5m4, 'bo5m4', 'map4');

        // BO5 Map 5
        var bo5m5State = localStorage.getItem('bo5m5_state');   
        var bo5m5 = localStorage.getItem('bo5m5_map5_bo5');
        var bo5m5path = "assets\\ow_maps\\bo5\\" + convertToFileName(bo5m5) + ".png";
        var bo5m5display = document.getElementById('bo5m5display');
        bo5m5display.src = bo5m5path;
        setMapMode(bo5m5,'bo5m5state');
        var bo5m5StateDiv = document.getElementById('bo5m5state');
        var bo5m5scores = localStorage.getItem('bo5m5_team1_map5_score') + "-" + localStorage.getItem('bo5m5_team2_map5_score');
        setDivState('bo5m5state', localStorage.getItem('bo5m5_state'), bo5m5scores, bo5m5, 'bo5m5', 'map5');
    }

    function setDivState(divId, state, scores, map, tile, mapnum) {
        
        map = map.toUpperCase();
        var div = document.getElementById(divId);
        // Remove any existing state classes
        div.classList.remove('unplayed', 'upnext', 'ipr', 'done-blue', 'done-red', 'done-draw');
        var icon = localStorage.getItem(divId + 'icon');
        var t1 = parseInt(localStorage.getItem(tile + '_team1_' + mapnum + '_score'));
        var t2 = parseInt(localStorage.getItem(tile + '_team2_' + mapnum + '_score'));

        // Apply the appropriate class based on the state
        if (state === 'unplayed') {
            div.classList.add('unplayed');
            localStorage.setItem(tile + 'winner', 'null');
            div.innerHTML = "<br><br><br><br><br><h1>" + map +"</h1><img src=" + icon + ">"
        } else if (state === 'upnext') {
            div.classList.add('upnext');
            localStorage.setItem(tile + 'winner', 'null');
            div.innerHTML = "<br><br><br><br><h1>UP NEXT</h1><h2>" + map +"</h2><img src=" + icon + ">"
        } else if (state === 'ipr') {
            div.classList.add('ipr');
            localStorage.setItem('current-map', mapnum);
            localStorage.setItem(tile + 'winner', 'null');
            div.innerHTML = "<br><br><h1 style=\"font-size: 100px;\">" + scores + "</h1><h2>" + map +"</h2><img src=" + icon + ">";
        } else if (state == 'done'){
            if(parseInt(localStorage.getItem(tile + '_team1_' + mapnum + '_score')) > parseInt(localStorage.getItem(tile + '_team2_' + mapnum + '_score'))){
                var winner = localStorage.getItem('t1_logo')
                div.innerHTML = "<br><img class=\"winner-logo\" style=\"width: 170px; height: 170px; margin-bottom:40px;\" team=\"t1\" src=\""+ winner +"\"><h1 style=\"margin-bottom: -50px;\">" + scores + "</h1><h2>" + map +"</h2><img src=" + icon + ">";
                div.classList.add('done-blue');
                localStorage.setItem(tile + 'winner', 't1');
                
            }else if(parseInt(localStorage.getItem(tile + '_team1_' + mapnum + '_score')) == parseInt(localStorage.getItem(tile + '_team2_' + mapnum + '_score'))){
                div.innerHTML = "<br><br><br><h1>DRAW</h1><h1 style=\"margin-bottom: -49px;\">" + scores + "</h1><h2>" + map +"</h2><img src=" + icon + ">";
                div.classList.add('done-draw');
                localStorage.setItem(tile + 'winner', 'null');
            }
            else{
                var winner = localStorage.getItem('t2_logo')
                console.log(winner);
                div.innerHTML = "<br><img class=\"winner-logo\" style=\"width: 170px; height: 170px; margin-bottom:40px;\" team=\"t2\" src=\""+ winner +"\"><h1 style=\"margin-bottom: -50px;\">" + scores + "</h1><h2>" + map +"</h2><img src=" + icon + ">";
                div.classList.add('done-red');
                localStorage.setItem(tile + 'winner', 't2');
            }
        }
        
    }
    setInterval(function() {
        retrieveMaps();
    }, 1*1000);


    retrieveInfo();
    getOrder()


    function transformString(inputString) {
        // Check if the inputString starts with "map" followed by a number
        if (/^map\d+$/.test(inputString)) {
            // Extract the numeric part from the inputString
            const numericPart = inputString.slice(3);
            // Convert the numeric part to uppercase and add "MAP " before it
            const transformedString = "MAP " + numericPart.toUpperCase();
            return transformedString;
        } else {
            // If the inputString doesn't match the expected pattern, return it as is
            return inputString;
        }
    }
    
    function resetOpacity(){
        document.getElementById('b3m2d').style.color = 'rgba(255, 255, 255, 0.3)';
        document.getElementById('b3m2i').style.opacity = '0.3';
        document.getElementById('b3m3d').style.color = 'rgba(255, 255, 255, 0.3)';
        document.getElementById('b3m3i').style.opacity = '0.3';
        document.getElementById('b3m1d').style.color = 'rgba(255, 255, 255, 0.3)';
        document.getElementById('b3m1i').style.opacity = '0.3';
        document.getElementById('b5m2d').style.color = 'rgba(255, 255, 255, 0.3)';
        document.getElementById('b5m2i').style.opacity = '0.3';
        document.getElementById('b5m3d').style.color = 'rgba(255, 255, 255, 0.3)';
        document.getElementById('b5m3i').style.opacity = '0.3';
        document.getElementById('b5m4d').style.color = 'rgba(255, 255, 255, 0.3)';
        document.getElementById('b5m4i').style.opacity = '0.3';
        document.getElementById('b5m5d').style.color = 'rgba(255, 255, 255, 0.3)';
        document.getElementById('b5m5i').style.opacity = '0.3';
        document.getElementById('b5m1d').style.color = 'rgba(255, 255, 255, 0.3)';
        document.getElementById('b5m1i').style.opacity = '0.3';

    }
    // Retrieve form data from localStorage
    function retrieveInfo(){
        var t1name = localStorage.getItem('t1_name').toUpperCase();
        var name1 = document.getElementById('overlay-name-1');
        name1.innerHTML = t1name;

        var t2name = localStorage.getItem('t2_name').toUpperCase();;
        var name2 = document.getElementById('overlay-name-2');
        name2.innerHTML = t2name;

        var t1logo = localStorage.getItem('t1_logo');
        var logo1 = document.getElementById('overlay-logo-1');
        logo1.src = t1logo;

        var t2logo = localStorage.getItem('t2_logo');
        var logo2 = document.getElementById('overlay-logo-2');
        logo2.src = t2logo;

        var b3m1s = localStorage.getItem('bo3m1_state')
        var b3m2s = localStorage.getItem('bo3m2_state')
        var b3m3s = localStorage.getItem('bo3m3_state')
        var b5m1s = localStorage.getItem('bo5m1_state')
        var b5m2s = localStorage.getItem('bo5m2_state')
        var b5m3s = localStorage.getItem('bo5m3_state')
        var b5m4s = localStorage.getItem('bo5m4_state')
        var b5m5s = localStorage.getItem('bo5m5_state')

        var t1score = localStorage.getItem('t1score');
        var t2score = localStorage.getItem('t2score');

        document.getElementById('overlay-score-1').innerHTML = t1score;
        document.getElementById('overlay-score-2').innerHTML = t2score;

        var format = localStorage.getItem('mapset');
        
        if(format == 'bo3'){
            document.getElementById('overlay-format').innerHTML = 'BEST OF 3';
            document.getElementById('bo5-mapset').style.display = 'none';
            document.getElementById('bo3-mapset').style.display = '';
            if(b3m2s == 'ipr'){
                resetOpacity()
                localStorage.setItem('current-map', 'map2')
                document.getElementById('b3m2d').style.color = 'rgba(255, 255, 255, 1)';
                document.getElementById('b3m2i').style.opacity = '1';
            }else if(b3m3s == 'ipr'){
                resetOpacity()
                localStorage.setItem('current-map', 'map3')
                document.getElementById('b3m3d').style.color = 'rgba(255, 255, 255, 1)';
                document.getElementById('b3m3i').style.opacity = '1';
            }else{
                resetOpacity()
                localStorage.setItem('current-map', 'map1')
                document.getElementById('b3m1d').style.color = 'rgba(255, 255, 255, 1)';
                document.getElementById('b3m1i').style.opacity = '1';
            }
        }else{
            document.getElementById('overlay-format').innerHTML = 'BEST OF 5';
            document.getElementById('bo3-mapset').style.display = 'none';
            document.getElementById('bo5-mapset').style.display = '';
            if(b5m2s == 'ipr'){
                resetOpacity()
                localStorage.setItem('current-map', 'map2')
                document.getElementById('b5m2d').style.color = 'rgba(255, 255, 255, 1)';
                document.getElementById('b5m2i').style.opacity = '1';
            }else if(b5m3s == 'ipr'){
                resetOpacity()
                localStorage.setItem('current-map', 'map3')
                document.getElementById('b5m3d').style.color = 'rgba(255, 255, 255, 1)';
                document.getElementById('b5m3i').style.opacity = '1';
            }else if(b5m4s == 'ipr'){
                resetOpacity()
                localStorage.setItem('current-map', 'map4')
                document.getElementById('b5m4d').style.color = 'rgba(255, 255, 255, 1)';
                document.getElementById('b5m4i').style.opacity = '1';
            }else if(b5m5s == 'ipr'){
                resetOpacity()
                localStorage.setItem('current-map', 'map5')
                document.getElementById('b5m5d').style.color = 'rgba(255, 255, 255, 1)';
                document.getElementById('b5m5i').style.opacity = '1';
            }else{
                resetOpacity()
                localStorage.setItem('current-map', 'map1')
                document.getElementById('b5m1d').style.color = 'rgba(255, 255, 255, 1)';
                document.getElementById('b5m1i').style.opacity = '1';
            }
        }

        var curr_map = document.getElementById('current-map');
        curr_map.innerHTML = transformString(localStorage.getItem('current-map'));
    }

    function getOrder(){
        const control = [
            "Control",
            "Busan",
            "Ilios",
            "Lijiang Tower",
            "Nepal",
            "Oasis",
            "Samoa",
            "Antarctic Peninsula"
        ];
        const escort = [
            "Escort",
            "Circuit Royal",
            "Dorado",
            "Havana",
            "Junkertown",
            "Rialto",
            "Route 66",
            "Shambali Monastery",
            "Watchpoint: Gibraltar"
        ]
        const hybrid = [
            "Hybrid",
            "Blizzard World",
            "Eichenwalde",
            "Hollywood",
            "King’s Row",
            "Midtown",
            "Numbani",
            "Paraiso",
        ];
        const push = [
            "Push",
            "Colosseo",
            "Esperanca",
            "New Queen Street",
        ];
        const flashpoint = [
            "Flashpoint",
            "New Junk City",
            "Suravasa"
        ];
        const clash = [
            "Clash",
            "Hanaoka"
        ]
        
        var format = localStorage.getItem('mapset');
        var bo3m1 = localStorage.getItem('bo3m1_map1_bo3');
        var bo3m2 = localStorage.getItem('bo3m2_map2_bo3');
        var bo3m3 = localStorage.getItem('bo3m3_map3_bo3');

        var bo5m1 = localStorage.getItem('bo5m1_map1_bo5');
        var bo5m2 = localStorage.getItem('bo5m2_map2_bo5');
        var bo5m3 = localStorage.getItem('bo5m3_map3_bo5');
        var bo5m4 = localStorage.getItem('bo5m4_map4_bo5');
        var bo5m5 = localStorage.getItem('bo5m5_map5_bo5');
        
        var displaymap1, displaymap2, displaymap3, displaymap4, displaymap5;
        
        if(format == 'bo3'){
            if(control.includes(bo3m1)) {
                displaymap1 = "CONTROL";
            } else if(escort.includes(bo3m1)) {
                displaymap1 = "ESCORT";
            } else if(hybrid.includes(bo3m1)) {
                displaymap1 = "HYBRID";
            } else if(push.includes(bo3m1)) {
                displaymap1 = "PUSH";
            } else if(flashpoint.includes(bo3m1)) {
                displaymap1 = "FLASHPOINT";
            } else if(clash.includes(bo3m1)) {
                displaymap1 = "CLASH";
            }

            if(control.includes(bo3m2)) {
                displaymap2 = "CONTROL";
            } else if(escort.includes(bo3m2)) {
                displaymap2 = "ESCORT";
            } else if(hybrid.includes(bo3m2)) {
                displaymap2 = "HYBRID";
            } else if(push.includes(bo3m2)) {
                displaymap2 = "push";
            } else if(flashpoint.includes(bo3m2)) {
                displaymap2 = "flashpoint";
            } else if(clash.includes(bo3m2)) {
                displaymap2 = "CLASH";
            }

            if(control.includes(bo3m3)) {
                displaymap3 = "CONTROL";
            } else if(escort.includes(bo3m3)) {
                displaymap3 = "ESCORT";
            } else if(hybrid.includes(bo3m3)) {
                displaymap3 = "HYBRID";
            } else if(push.includes(bo3m3)) {
                displaymap3 = "PUSH";
            } else if(flashpoint.includes(bo3m3)) {
                displaymap3 = "FLASHPOINT";
            } else if(clash.includes(bo3m3)) {
                displaymap3 = "CLASH";
            }

            document.getElementById('b3m1d').innerHTML = bo3m1.toUpperCase();
            document.getElementById('b3m1i').src = "assets\\in_game_overlay\\ow_icons\\" + displaymap1.toLowerCase() + '.png';
            document.getElementById('b3m2d').innerHTML = bo3m2.toUpperCase();
            document.getElementById('b3m2i').src = "assets\\in_game_overlay\\ow_icons\\" + displaymap2.toLowerCase()  + '.png';
            document.getElementById('b3m3d').innerHTML = bo3m3.toUpperCase();
            document.getElementById('b3m3i').src = "assets\\in_game_overlay\\ow_icons\\" + displaymap3.toLowerCase()  + '.png';
            
        
        }

        if(format == 'bo5'){
            if(control.includes(bo5m1)) {
                displaymap1 = "CONTROL";
            } else if(escort.includes(bo5m1)) {
                displaymap1 = "ESCORT";
            } else if(hybrid.includes(bo5m1)) {
                displaymap1 = "HYBRID";
            } else if(push.includes(bo5m1)) {
                displaymap1 = "PUSH";
            } else if(flashpoint.includes(bo5m1)) {
                displaymap1 = "FLASHPOINT";
            } else if(clash.includes(bo5m1)) {
                displaymap1 = "CLASH";
            }

            if(control.includes(bo5m2)) {
                displaymap2 = "CONTROL";
            } else if(escort.includes(bo5m2)) {
                displaymap2 = "ESCORT";
            } else if(hybrid.includes(bo5m2)) {
                displaymap2 = "HYBRID";
            } else if(push.includes(bo5m2)) {
                displaymap2 = "PUSH";
            } else if(flashpoint.includes(bo5m2)) {
                displaymap2 = "FLASHPOINT";
            } else if(clash.includes(bo5m2)) {
                displaymap2 = "CLASH";
            }

            if(control.includes(bo5m3)) {
                displaymap3 = "CONTROL";
            } else if(escort.includes(bo5m3)) {
                displaymap3 = "ESCORT";
            } else if(hybrid.includes(bo5m3)) {
                displaymap3 = "HYBRID";
            } else if(push.includes(bo5m3)) {
                displaymap3 = "PUSH";
            } else if(flashpoint.includes(bo5m3)) {
                displaymap3 = "FLASHPOINT";
            } else if(clash.includes(bo5m3)) {
                displaymap3 = "CLASH";
            }

            if(control.includes(bo5m4)) {
                displaymap4 = "CONTROL";
            } else if(escort.includes(bo5m4)) {
                displaymap4 = "ESCORT";
            } else if(hybrid.includes(bo5m4)) {
                displaymap4 = "HYBRID";
            } else if(push.includes(bo5m4)) {
                displaymap4 = "PUSH";
            } else if(flashpoint.includes(bo5m4)) {
                displaymap4 = "FLASHPOINT";
            } else if(clash.includes(bo5m4)) {
                displaymap4 = "CLASH";
            }

            if(control.includes(bo5m5)) {
                displaymap5 = "CONTROL";
            } else if(escort.includes(bo5m5)) {
                displaymap5 = "ESCORT";
            } else if(hybrid.includes(bo5m5)) {
                displaymap5 = "HYBRID";
            } else if(push.includes(bo5m5)) {
                displaymap5 = "PUSH";
            } else if(flashpoint.includes(bo5m5)) {
                displaymap5 = "FLASHPOINT";
            } else if(clash.includes(bo5m5)) {
                displaymap5 = "CLASH";
            }


        document.getElementById('b5m1d').innerHTML = bo5m1.toUpperCase();
        document.getElementById('b5m1i').src = "assets\\in_game_overlay\\ow_icons\\" + displaymap1.toLowerCase()  + '.png';
        document.getElementById('b5m2d').innerHTML = bo5m2.toUpperCase();
        document.getElementById('b5m2i').src = "assets\\in_game_overlay\\ow_icons\\" + displaymap2.toLowerCase()  + '.png';
        document.getElementById('b5m3d').innerHTML = bo5m3.toUpperCase();
        document.getElementById('b5m3i').src = "assets\\in_game_overlay\\ow_icons\\" + displaymap3.toLowerCase()  + '.png';


        document.getElementById('b5m4d').innerHTML = bo5m4.toUpperCase();
        document.getElementById('b5m4i').src = "assets\\in_game_overlay\\ow_icons\\" + displaymap4.toLowerCase()  + '.png';
        document.getElementById('b5m5d').innerHTML = bo5m5.toUpperCase();
        document.getElementById('b5m5i').src = "assets\\in_game_overlay\\ow_icons\\" + displaymap5.toLowerCase()  + '.png';
        }

        
    
    }

    

    setInterval(function(){
        retrieveInfo();
        getOrder();
    }, 1 * 1000)