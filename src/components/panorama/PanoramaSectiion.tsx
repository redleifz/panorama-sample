"use client";
import React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import "@photo-sphere-viewer/markers-plugin/index.css"; // Import the required CSS

const PanoramaSectiion = ({
  roomState,
  setRoomState,
  roomObject,
}: {
  roomState: string;
  setRoomState: (roomState: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  roomObject: any[]; // Define the type of roomObject as an array of objects
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReady = (instance: any) => {
    const markersPlugs = instance.getPlugin(MarkersPlugin);
    if (!markersPlugs) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    markersPlugs.addEventListener("select-marker", (event: any) => {
      const selectedMarker = event.marker; // The marker that was selected
      setRoomState(selectedMarker.id); // Update the room state based on the selected marker
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    return
    //use for check position of the marker
    const yaw = e.data.yaw.toFixed(2);
    const pitch = e.data.pitch.toFixed(2);
    console.log(`yaw = ${yaw}, pitch = ${pitch}`);
  };

  // const [markers, setMarkers] = useState<any>([]);


  return (
    <div className="h-full absolute top-0 left-0 w-full z-10">
      {
        roomObject.map((room,) => {
          if (room.id === roomState) {
            return (
              <ReactPhotoSphereViewer
                key={room.id}
                src={`${room.id}.jpg`}
                height="100%"
                width="100%"
                littlePlanet={false}
                navbar={false}
                plugins={[
                  [
                    MarkersPlugin,
                    {
                      markers: room.markers,
                    },
                  ],
                ]}
                defaultZoomLvl={0} // Ensures the initial zoom is at its minimum
                maxFov={100} // Sets the maximum field of view (FOV) to be as wide as possible
                onReady={handleReady}
                onClick={handleClick}
              />
            );
          }
          return null;
        })}
      {/* <ReactPhotoSphereViewer
      }

      {/* <ReactPhotoSphereViewer
        src={`${roomState}.jpg`}
        height="100%"
        width="100%"
        littlePlanet={false}
        navbar={false}
        plugins={[
          [
            MarkersPlugin,
            {
              markers: markers,
            },
          ],
        ]}
        // plugins={[
        //   [
        //     MarkersPlugin,
        //     {
        //       markers: [
        //         {
        //           id: "bedroom",
        //           image: image,
        //           position: { yaw: 13, pitch: 0 },
        //           size: size,
        //         },
        //       ],
        //     },
        //   ],
        // ]}
        onReady={handleReady}
        onClick={handleClick}
      /> */}
    </div>
  );
};

export default PanoramaSectiion;
