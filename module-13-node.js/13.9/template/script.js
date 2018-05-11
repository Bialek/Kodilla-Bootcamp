document.getElementById("upload-file").onchange = function () {
				var submit = document.getElementById("submit");
				if(this.value.split(/(\\|\/)/g).pop()=='') {
					document.getElementById("uploadLabel").innerHTML = "Select file from device";
					submit.style.cursor = "no-drop";
					submit.style.color = "#ccc";
					submit.style.backgroundColor = "inherit";
				} else {
					document.getElementById("uploadLabel").innerHTML = this.value.split(/(\\|\/)/g).pop();
					document.getElementById("uploadDiv").style.backgroundColor = "#008000";		
					submit.style.cursor = "pointer";
					submit.style.color = "#fff";
					submit.style.backgroundColor = "#dd4b4d";
				}
			};