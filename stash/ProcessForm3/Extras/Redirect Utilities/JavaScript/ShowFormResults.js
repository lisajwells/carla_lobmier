// ShowFormResults Action 2.5 by Nate Baldwin, www.mindpalette.com
// To be used with NateMail.php, for processing script
// User-defined variables (CSS class name settings)...

var MPNameClass = ""; // insert the name of the CSS class for the form field names (between the quotes)
var MPValueClass = ""; // insert the name of the CSS class for the form field values (between the quotes)

var MPData = location.search;
var MPString = "";
if (MPNameClass.charAt(0) == ".") MPNameClass = MPNameClass.substring(1);
if (MPNameClass != "") MPNameClass = "<span class=\""+MPNameClass+"\">";
if (MPNameClass.charAt(0) == ".") MPNameClass = MPNameClass.substring(1);
if (MPValueClass != "") MPValueClass = "<span class=\""+MPValueClass+"\">";
if (MPData != "" && MPData != "?") {
	MPData = MPData.substring(1);
	MPData = MPData.split("&");
	for (i=0; i<MPData.length; i++) {
		var thisPair = MPData[i];
		thisPair = thisPair.split("=");
		var thisName = unescape(thisPair[0]);
		var thisValue = unescape(thisPair[1]);
		var nameRow = "<tr>\n<td align=\"right\" valign=\"top\">";
		if (MPNameClass != "")
			nameRow += MPNameClass+thisName+":&nbsp;&nbsp;</span></td>\n";
			else nameRow += "<b>"+thisName+":&nbsp;&nbsp;</b></td>\n";
		var thisValue = unescape(thisPair[1]);
		var valueRow = "<td align=\"left\" valign=\"top\">";
		if (MPValueClass != "")
			valueRow += MPValueClass+thisValue+"</span></td>\n</tr>\n";
			else valueRow += thisValue+"</td>\n</tr>\n";
		MPString += (nameRow+valueRow);
		}
	}
if (MPString != "") {
	MPString = "<table border=\"0\" cellspacing=\"2\" cellpadding=\"0\">\n"+MPString+"</table>\n";
	document.write(MPString);
	}

// end of ShowFormResults script