//This file contains all the functions to use to activate animation on mouse move.

	//Require this bloc in the init function:


				// document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				// document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				// document.addEventListener( 'touchmove', onDocumentTouchMove, false );


	// --------------------------------------------

			// function onDocumentMouseDown( event ) {

			// 	event.preventDefault();

			// 	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			// 	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
			// 	document.addEventListener( 'mouseout', onDocumentMouseOut, false );

				
			// 	mouseXOnMouseDown = event.clientY - windowHalfY;
			// 	targetRotationOnMouseDown = targetRotation;

			// }

			// function onDocumentMouseMove( event ) {

			// 	mouseX = event.clientY - windowHalfY;

			// 	targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

			// }

			// function onDocumentMouseUp( event ) {

			// 	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
			// 	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
			// 	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

			// }

			// function onDocumentMouseOut( event ) {

			// 	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
			// 	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
			// 	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

			// }

			// function onDocumentTouchStart( event ) {

			// 	if ( event.touches.length == 1 ) {

			// 		event.preventDefault();

			// 		mouseXOnMouseDown = event.touches[ 0 ].pageY - windowHalf;
			// 		targetRotationOnMouseDown = targetRotation;

			// 	}

			// }

			// function onDocumentTouchMove( event ) {
			// 	if ( event.touches.length == 1 ) {
			// 		event.preventDefault();
			// 		mouseX = event.touches[ 0 ].pageY - windowHalfY;
			// 		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
			// 	}
			// }

			//