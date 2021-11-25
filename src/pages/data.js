const trails = [
     {
        name: 'Incline',
        title: 'The Incline Trail',
        content: [
            'The Manitou Springs Incline, also known as the Manitou Incline or simply the Incline, is a popular hiking trail rising above Manitou Springs, Colorado, near Colorado Springs. The Incline ascends on the east slope of Rocky Mountain which is itself on the eastern flank of Pikes Peak.',
        ]
    },    {
        name: 'blodgett-peak',
        title: 'Blodgett Peak Trail',
        content: [
            'The Blodgett Open Space has 167 acres of open space, trails, and wildlife habitat. Once part of the Blodgett Ranch, the Blodgett Open Space area is home to many animal species and vegetation species. Dominating this area are the ponderosa pine, Douglas fir and scrub oak. This land is also home to peregrine falcons. Once placed on the endangered species list, these birds fly freely throughout the Blodgett Open Space. Also unique to this area are the geological rock features. Throughout the open space there is a variety of rock sedimentation, including Manitou Limestone, Fountain Formation and Pierre Shale. The Rampart Range fault separates the sedimentary bedrock from the granite.',
        ]
    },     {
        name: 'captain-jacks',
        title: 'Captain Jacks & Big Bikes OHV Route',
        content: [
            'Captain Jacks and Big Bikes OHV Route is a 35.6 mile lightly trafficked point-to-point trail located near Colorado Springs, Colorado that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for bird watching and off road driving.',
        ]
    },
    {
        name: 'Blodgett',
        title: 'Blodgett Peak Open Space Connector Loop',
        content: [
            'Blodgett Peak Open Space Connector Loop is a 1.8 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },

    {
        name: 'Front Range Ridge via Douglas Fir Trail',
        title: 'Front Range Ridge via Douglas Fir Trail',
        content: [
            'Blodgett Peak is a mountain summit in El Paso County, Colorado. Blodgett Peak is located in Pike National Forest. and at its base is Blodgett Peak Open Space of Colorado Springs. It is also 1.3 miles long. ',
        ]
    },
    {
        name: 'Hodgeback Valley and Codell Loop',
        title: 'Hodgeback Valley and Codell Loop',
        content: [
            'Hogback Valley and Codell Loop is a 1.7 mile moderately trafficked loop trail located near Colorado Springs, Colorado that offers scenic views. The trail is rated as moderate and offers a number of activity options.',
        ]
    },
    {
        name: 'Mount Cutler Trail',
        title: 'Mount Cutler Trail',
        content: [
            'Mount Cutler Trail is a 1.7 mile heavily trafficked out and back trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, and running and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Mount Muscoco Trail',
        title: 'Mount Muscoco Trail',
        content: [
            'Mount Muscoco Trail is a 4 mile heavily trafficked out and back trail located near Colorado Springs, Colorado that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking and is best used from May until November. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Ormes Peak East Face',
        title: 'Ormes Peak East Face',
        content: [
            'Ormes Peak East Face is a 0.5 mile moderately trafficked out and back trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is best used from May until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Ormes Peak Trail',
        title: 'Ormes Peak Trail',
        content: [
            'Ormes Peak Trail is a 0.9 mile moderately trafficked loop trail located near Colorado Springs, Colorado that features a great forest setting and is rated as moderate. The trail is primarily used for hiking, walking, and nature trips and is best used from April until October.',
        ]
    },
    {
        name: 'Palmer, Buckskin-Charley, Niobrara, and Bretag Trail Loop',
        title: 'Palmer, Buckskin-Charley, Niobrara, and Bretag Trail Loop',
        content: [
            'Palmer, Buckskin-Charley, Niobrara, and Bretag Trail Loop is a 4 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, and running and is best used from March until October. Dogs are also able to use this trail.',
        ]
    },
    {
        name: 'Palmer, Cabin Canyon, Strausenbach, and Central Gardens Trail Loop',
        title: 'Palmer, Cabin Canyon, Strausenbach, and Central Gardens Trail Loop',
        content: [
            'Palmer, Cabin Canyon, Strausenbach, and Central Gardens Trail Loop is a 4 mile heavily trafficked loop trail located near Manitou Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking and walking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Palmer Trail (Section 16)',
        title: 'Palmer Trail (Section 16)',
        content: [
            'A 6-mile hiking & biking mountain trail provides pine forest, red rock canyon & creek surrounds.',
        ]
    },
    {
        name: 'Perkins Central Garden Trail',
        title: 'Perkins Central Garden Trail',
        content: [
            'Perkins Central Garden Trail is a 1.1 mile heavily trafficked loop trail located near Manitou Springs, Colorado that offers the chance to see wildlife and is good for all skill levels. The trail is primarily used for walking, running, and nature trips and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Quarry via Red Rock Canyon Trail',
        title: 'Quarry via Red Rock Canyon Trail',
        content: [
            'Quarry via Red Rock Canyon Trail  is a 0.6 mile heavily trafficked out and back trail located near Manitou Springs, Colorado that features a lake and is good for all skill levels. The trail is primarily used for hiking, walking, nature trips, and mountain biking and is best used from March until October.',
        ]
    },
    {
        name: 'Red Rock Rim Trail to Palmer Trail To Greenlee Trail',
        title: 'Red Rock Rim Trail to Palmer Trail To Greenlee Trail',
        content: [
            'Red Rock Rim Trail to Palmer Trail To Greenlee Trail is a 5.4 mile moderately trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, running, and mountain biking and is best used from September until May.',
        ]
    },
    {
        name: 'Red Squirrel Trail to Douglas Fir Trail',
        title: 'Red Squirrel Trail to Douglas Fir Trail',
        content: [
            'Red Squirrel Trail to Douglas Fir Trail is a 3.9 mile moderately trafficked out and back trail located near Colorado Springs, Colorado that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, walking, running, and nature trips. A quick trail but a good workout.',
        ]
    },
    {
        name: 'Sand Canyon, Mesa, Greenlee, Red Rock Canyon Loop',
        title: 'Sand Canyon, Mesa, Greenlee, Red Rock Canyon Loop',
        content: [
            'Sand Canyon, Mesa, Greenlee, Red Rock Canyon Loop is a 5.4 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Seven Bridges Trail',
        title: 'Seven Bridges Trail',
        content: [
            'A popular moderately-difficult 5.78 mile out and back hiking-only trail located in North Cheyenne CaÃ±on. The trail follows a mountain stream and is one of the few cool hikes in the summer, even at mid-day. Best to hike Mar. through Nov., or when the snowpack is low. Dogs on leash are okay.',
        ]
    },
    {
        name: 'St. Mary\'s Falls Trail',
        title: 'St. Mary\'s Falls Trail',
        content: [
            'St. Mary\'s Falls Trail is a 5.9 mile heavily trafficked out and back trail located near Manitou Springs, Colorado that features a waterfall and is rated as moderate. The trail is primarily used for hiking, horses, and mountain biking and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Greenlee and Mesa Loop to Off Leash Dog Area',
        title: 'Greenlee and Mesa Loop to Off Leash Dog Area',
        content: [
            'Greenlee and Mesa Loop to Off Leash Dog Area is a 2.9 mile moderately trafficked loop trail located near Colorado Springs, Colorado that offers scenic views and is rated as moderate. The trail is primarily used for hiking, walking, nature trips, and birding and is best used from March until September. Dogs are also able to use this trail.'
        ]
    },
    {
        name: 'High Arches Trail and Ute Valley Regional Park Trail Loop',
        title: 'High Arches Trail and Ute Valley Regional Park Trail Loop',
        content: [
            'High Arches Trail and Ute Valley Regional Park Trail Loop is a 1.5 mile moderately trafficked loop trail located near Colorado Springs, Colorado that offers the chance to see wildlife and is good for all skill levels. The trail is primarily used for hiking, running, and nature trips.',
        ]
    },
    {
        name: 'Intemann Trail',
        title: 'Intemann Trail',
        content: [
            'The Intemann Trail has finally been completed by going through the newly formed Iron Mountain Open Space. This means there is finally a connection between the Manitou Springs trails and the trail in western Colorado Springs. From the Palmer/Section 16 trailhead in Colorado Springs, head west until you reach the Intemann Trail in about 1 mile, which will head off to the right. Follow this trail through grasslands before entering rolling forests.',
        ]
    },
    {
        name: 'Mesa, Greenlee and Red Rock Canyon Path Loop',
        title: 'Mesa, Greenlee and Red Rock Canyon Path Loop',
        content: [
            'Mesa, Greenlee and Red Rock Canyon Path Loop is a 1.8 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features a lake and is good for all skill levels. The trail is primarily used for hiking, walking, running, and mountain biking. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Palmer Trail to Siamese Twins',
        title: 'Palmer Trail to Siamese Twins',
        content: [
            'Palmer Trail to Siamese Twins is a 1.5 mile out and back trail located near Colorado Springs, Colorado that offers scenic views and is rated as moderate. The trail is primarily used for hiking, walking, and nature trips. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Rampart Range Road',
        title: 'Rampart Range Road',
        content: [
            'Rampart Range Road is a 22.1 mile heavily trafficked point-to-point trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for scenic driving and ohv/off road driving and is best used from April until November.',
        ]
    },
    {
        name: 'Scotsman Trail Loop',
        title: 'Scotsman Trail Loop',
        content: [
            'Scotsman Trail Loop is a 1 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Siamese Twins Loop Trail',
        title: 'Siamese Twins Loop Trail',
        content: [
            'Siamese Twins Loop Trail is a 0.5 mile heavily trafficked loop trail located near Manitou Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking and walking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Stanley Canyon Trail to Stanley Reservoir',
        title: 'Stanley Canyon Trail to Stanley Reservoir',
        content: [
            'Stanley Canyon Trail to Stanley Reservoir is a 4.1 mile moderately trafficked out and back trail located near Green Mountain Falls, Colorado that features a lake and is rated as difficult. The trail is primarily used for hiking and is best used from June until October.',
        ]
    },
    {
        name: 'Stanley Canyon Trail',
        title: 'Stanley Canyon Trail',
        content: [
            'Stanley Canyon Trail is a 5.8 mile heavily trafficked out and back trail located near Colorado Springs, Colorado that features a lake and is rated as difficult. The trail is primarily used for hiking, running, and nature trips and is best used from May until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Susan G. Bertag Trail and Palmer Trail Loop',
        title: 'Susan G. Bertag Trail and Palmer Trail Loop',
        content: [
            'Susan G. Bretag Trail and Palmer Trail Loop is a 2.5 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Upper Loop Trail',
        title: 'Upper Loop Trail',
        content: [
            'Upper Loop Trail is a 0.4 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, nature trips, and bird watching and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'USAFA Stairs',
        title: 'USAFA Stairs',
        content: [
            'USAFA Stairs is a 0.3 mile moderately trafficked out and back trail located near USAF Academy, Colorado and is rated as moderate. The trail is primarily used for walking and running and is best used from April until September.',
        ]
    },
    {
        name: 'Ute Trail',
        title: 'Ute Trail',
        content: [
            'Ute Trail is a 6.2 mile heavily trafficked out and back trail located near Aspen, Colorado that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, running, and nature trips and is best used from May until October. Dogs are also able to use this trail.',
        ]
    },
    {
        name: 'Ute Valley Park Loop Trail',
        title: 'Ute Valley Park Loop Trail',
        content: [
            'Ute Valley Park Loop Trail is a 3.8 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features a river and is rated as moderate. The trail offers a number of activity options and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'West Monument Creek Trail 713 to Northfield Reservoir',
        title: 'West Monument Creek Trail 713 to Northfield Reservoir',
        content: [
            'This trail is on private property. Please head somewhere else unless you\'ve been invited by the owners.',
        ]
    },
    {
        name: 'Bear Creek Trail',
        title: 'Bear Creek Trail',
        content: [
            'Bear Creek Trail is a 5.1 mile heavily trafficked out and back trail located near Telluride, Colorado that features a waterfall and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Cheyenne Canyon to Mount Rosa',
        title: 'Cheyenne Canyon to Mount Rosa',
        content: [
            'Cheyenne Canyon to Mount Rosa is a 13.9 mile moderately trafficked out and back trail located near Colorado Springs, Colorado that features a waterfall and is rated as difficult. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Three Peaks Loop North Cheyenne Canyon',
        title: 'Three Peaks Loop North Cheyenne Canyon',
        content: [
            'Three Peaks Loop Trail is a 14.1 mile moderately trafficked loop trail located near Boulder, Colorado that features beautiful wild flowers and is only recommended for very experienced adventurers. The trail offers a number of activity options and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Mount Garfield Peak',
        title: 'Mount Garfield Peak',
        content: [
            'Mount Garfield Peak is a 9.7 mile heavily trafficked out and back trail located near Colorado Springs, Colorado that features a river and is rated as difficult. The trail is primarily used for hiking and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Mount Buckhorn Peak',
        title: 'Mount Buckhorn Peak',
        content: [
            'Mount Buckhorn Peak is a 3.9 mile moderately trafficked out and back trail located near Colorado Springs, Colorado that features a great forest setting and is rated as moderate. The trail is primarily used for hiking and running and is best used from March until December. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Kineo Mountain via Seven Bridges Trail',
        title: 'Kineo Mountain via Seven Bridges Trail',
        content: [
            'Kineo Mountain via Seven Bridges Trail is a 6.5 mile heavily trafficked out and back trail located near Colorado Springs, Colorado that features a waterfall and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and bird watching and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Loud\'s Cabin',
        title: 'Loud\'s Cabin',
        content: [
            'Loud\'s Cabin is a 6.2 mile moderately trafficked out and back trail located near Colorado Springs, Colorado that features a waterfall and is rated as moderate. The trail is primarily used for hiking, running, and bird watching and is best used from March until December. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Jones Park 701 Connector Trail',
        title: 'Jones Park 701 Connector Trail',
        content: [
            'This trail runs from High Drive, westward, and eventually ends at Colorado Springs Utilities property (also known as the Seven Lakes Watershead area). The trail passes through several distinctive properties. Trail 667 travels through the following properties: City of Colorado Springs, USDA- Forest Service, and El Paso County. This is a multiuse trail and is part of the overall Captain Jack\'s trail system. Motorcycles are allowed on this trail. The trail leads in a southwesterly direction, from High Drive, located within the City of Colorado Springs - Cheyenne Canyon Park. High Drive itself, is not currently open to motor vehicles.',
        ]
    },
    {
        name: 'Mays Peak Trail (Northwest Approach)',
        title: 'Mays Peak Trail (Northwest Approach)',
        content: [
            'Mays Peak Trail (Northwest Approach) is a 1.8 mile out and back trail located near Manitou Springs, Colorado that offers the chance to see wildlife and is good for all skill levels. The trail is primarily used for hiking.',
        ]
    },
    {
        name: 'Helen Hunt Falls via North Cheyenne Canyon Rd',
        title: 'Helen Hunt Falls via North Cheyenne Canyon Rd',
        content: [
            'Helen Hunt Falls via North Cheyenne Canyon Rd is a 7.8 mile out and back trail located near Colorado Springs, Colorado that features a waterfall and is rated as moderate. The trail is primarily used for hiking and nature trips.',
        ]
    },
    {
        name: 'Columbine and Spring Creek Trail',
        title: 'Columbine and Spring Creek Trail',
        content: [
            'Columbine and Spring Creek Trail is a 2.7 mile moderately trafficked out and back trail located near Colorado Springs, Colorado that offers the chance to see wildlife. The trail is rated as moderate and is primarily used for hiking and running. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Middle Columbine Trail',
        title: 'Middle Columbine Trail',
        content: [
            'Middle Columbine Trail is a 5.3 mile heavily trafficked out and back trail located near Colorado Springs, Colorado that features a great forest setting and is rated as moderate. The trail is primarily used for hiking and is best used from May until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Midland Trail',
        title: 'Midland Trail',
        content: [
            'Midland Trail  is a 7.9 mile lightly trafficked out and back trail located near Colorado Springs, Colorado that features a river and is good for all skill levels. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail.',
        ]
    },
    {
        name: 'Bear Creek Dog Park Trail',
        title: 'Bear Creek Dog Park Trail',
        content: [
            'Bear Creek Dog Park Trail is a 2 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features a river and is good for all skill levels. The trail is primarily used for hiking, walking, running, and nature trips and is best used from April until September. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Lower Bear Creek Park',
        title: 'Lower Bear Creek Park',
        content: [
            'Lower Bear Creek Park is a 2.6 mile moderately trafficked loop trail located near Colorado Springs, Colorado that features a river and is rated as moderate. The trail is primarily used for hiking, walking, running, and mountain biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Pikes Peak Greenway',
        title: 'Pikes Peak Greenway',
        content: [
            'Pikes Peak Greenway Trail is a 26.6 mile moderately trafficked out and back trail located near Fountain, Colorado that features a river and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Monument Valley Park Loop',
        title: 'Monument Valley Park Loop',
        content: [
            'Monument Valley Park Loop is a 1.5 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features a river and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is best used from April until June. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Kinnickinnick Trail',
        title: 'Kinnickinnick Trail',
        content: [
            'Kinnickinnick Trail  is a 1.6 mile moderately trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is best used from May until September.',
        ]
    },
    {
        name: 'Yucca, Mesa, and Edna Mae Bennet Short Loop',
        title: 'Yucca, Mesa, and Edna Mae Bennet Short Loop',
        content: [
            'Yucca, Mesa and Edna Mae Bennet Short Loop is a 1.8 mile lightly trafficked loop trail located near Colorado Springs, Colorado that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, running, and mountain biking. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Palmer Point Trail',
        title: 'Palmer Point Trail',
        content: [
            'Palmer Point Trail is a 3.2 mile moderately trafficked out and back trail located near Colorado Springs, Colorado that offers scenic views and is good for all skill levels. The trail is primarily used for walking, nature trips, and bird watching.',
        ]
    },
    {
        name: 'Templeton and Mesa Trail Loop',
        title: 'Templeton and Mesa Trail Loop',
        content: [
            'Templeton and Mesa Trail Loop is a 3.8 mile lightly trafficked loop trail located near Colorado Springs, Colorado that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, and mountain biking. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Palmer Park Ramble',
        title: 'Palmer Park Ramble',
        content: [
            'Palmer Park Ramble is a 2.2 mile moderately trafficked loop trail located near Colorado Springs, Colorado and is good for all skill levels. The trail offers a number of activity options and is best used from April until October. Dogs are also able to use this trail.',
        ]
    },
    {
        name: 'Cheyenne and Grandview Trail Loop',
        title: 'Cheyenne and Grandview Trail Loop',
        content: [
            'Cheyenne and Grandview Trail Loop is a 1.8 mile moderately trafficked loop trail located near Colorado Springs, Colorado that offers the chance to see wildlife. The trail is good for all skill levels and offers a number of activity options. Dogs and horses are also able to use this trail.',
        ]
    },
    {
        name: 'Edna Mae Bennet Nature Trail',
        title: 'Edna Mae Bennet Nature Trail',
        content: [
            'Edna Mae Bennet Nature Trail is a 2.3 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Palmer Park Outer Loop Trail',
        title: 'Palmer Park Outer Loop Trail',
        content: [
            'Palmer Park Outer Loop Trail is a 7.4 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is best used from March until November. Dogs and horses are also able to use this trail.',
        ]
    },
    {
        name: 'Templeton Trail',
        title: 'Templeton Trail',
        content: [
            'Templeton Trail is a 3.9 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Eagle Park Trail',
        title: 'Eagle Park Trail',
        content: [
            'Eagle Park Trail is a 0.7 mile moderately trafficked loop trail located near Colorado Springs, Colorado that offers scenic views and is good for all skill levels. The trail is primarily used for walking, trail running, nature trips, and birding and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Sand Creek Trail',
        title: 'Sand Creek Trail',
        content: [
            'Sand Creek Trail is a 5.3 mile moderately trafficked out and back trail located near Colorado Springs, Colorado that features a river and is good for all skill levels. The trail is primarily used for hiking, walking, trail running, and road biking. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Meadowlark Loop',
        title: 'Meadowlark Loop',
        content: [
            'Meadowlark Loop is a 0.5 mile lightly trafficked loop trail located near Colorado Springs, Colorado and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Morton Loop Trail (MoLT)',
        title: 'Morton Loop Trail (MoLT)',
        content: [
            'Morton Loop Trail (MoLT) is a 0.5 mile moderately trafficked loop trail located near Fountain, Colorado and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },

    {
        name: 'Fountain Creek Regional Trail',
        title: 'Fountain Creek Regional Trail',
        content: [
            'Fountain Creek Nature Trail is a 1.7 mile heavily trafficked loop trail located near Fountain, Colorado that features a river and is good for all skill levels. The trail offers a number of activity options and is accessible year-round.',
        ]
    },
    {
        name: 'Willow Springs Ponds Loop',
        title: 'Willow Springs Ponds Loop',
        content: [
            'Willow Springs Ponds Loop is a 0.8 mile moderately trafficked loop trail located near Fountain, Colorado that features a lake and is good for all skill levels. The trail is primarily used for hiking, walking, and bird watching.',
        ]
    },
    {
        name: 'Big Bluestem and Meadowlark Loop',
        title: 'Big Bluestem and Meadowlark Loop',
        content: [
            'Big Bluestem and Meadowlark Loop is a 8.3 mile lightly trafficked out and back trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, running, and mountain biking and is best used from March until October.',
        ]
    },
    {
        name: 'Fountain Creek Nature Trail',
        title: 'Fountain Creek Nature Trail',
        content: [
            'Fountain Creek Nature Trail is a 1.7 mile heavily trafficked loop trail located near Fountain, Colorado that features a river and is good for all skill levels. The trail offers a number of activity options and is accessible year-round.',
        ]
    },
    {
        name: 'Rock Island Trail',
        title: 'Rock Island Trail',
        content: [
            'Rock Island Trail is a 12.5 mile moderately trafficked out and back trail located near Colorado Springs, Colorado and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'The Pineries Open Space',
        title: 'The Pineries Open Space',
        content: [
            'The Pineries Open Space is a 8.6 mile moderately trafficked loop trail located near Peyton, Colorado that features a river and is good for all skill levels. The trail is primarily used for hiking, walking, running, and mountain biking.',
        ]
    },
    {
        name: 'Black Forest Section 16 Loop',
        title: 'Black Forest Section 16 Loop',
        content: [
            'Black Forest Section 16 Loop is a 3.8 mile heavily trafficked loop trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs and horses are also able to use this trail.',
        ]
    },
    {
        name: 'Sandstone Loop',
        title: 'Sandstone Loop',
        content: [
            'Sandstone Loop is a 0.5 mile moderately trafficked loop trail located near Colorado Springs, Colorado and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Snowy River Loop',
        title: 'Snowy River Loop',
        content: [
            'Snowy River Loop is a 0.4 mile moderately trafficked loop trail located near Colorado Springs, Colorado and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Homestead Trail',
        title: 'Homestead Trail',
        content: [
            'Homestead Trail  is a 6.4 mile moderately trafficked out and back trail located near Colorado Springs, Colorado that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Chaparral Trail',
        title: 'Chaparral Trail',
        content: [
            'Chaparral Trail is a 2.1 mile loop trail located near Colorado Springs, Colorado that features beautiful wild flowers. The trail is rated as moderate and offers a number of activity options. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Santa Fe Hike/Bike Trail to Pulpit Rock',
        title: 'Santa Fe Hike/Bike Trail to Pulpit Rock',
        content: [
            'Santa Fe Hike/Bike Trail to Pulpit Rock is a 5.5 mile moderately trafficked loop trail located near Colorado Springs, Colorado that offers scenic views and is rated as moderate. The trail offers a number of activity options and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.',
        ]
    },
    {
        name: 'Pikes Peak Greenway Trail: New Santa Fe to Bear Creek Park',
        title: 'Pikes Peak Greenway Trail: New Santa Fe to Bear Creek Park',
        content: [
            'Pikes Peak Greenway Trail: New Santa Fe to Bear Creek Park is a 9.7 mile moderately trafficked point-to-point trail located near USAF Academy, Colorado that offers the chance to see wildlife and is good for all skill levels. The trail offers a number of activity options and is best used from March until November.',
        ]
    },
    {
        name: 'Santa Fe Regional Trail',
        title: 'Santa Fe Regional Trail',
        content: [
            'Santa Fe Regional Trail is a 16.9 mile heavily trafficked point-to-point trail located near USAF Academy, Colorado that features a lake and is good for all skill levels. The trail offers a number of activity options and is best used from March until October. Dogs and horses are also able to use this trail.',
        ]
    },
];

export default trails;