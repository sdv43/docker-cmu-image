import { WebSocketServer } from 'ws'

const mmuiWS = new WebSocketServer({ port: 2700 })
const dbapiWS = new WebSocketServer({ port: 2766 })
const appsdkWS = new WebSocketServer({ port: 2800 })

mmuiWS.on('connection', function connection(ws) {
  console.log('MMUI onconnection')

  ws.on('error', console.error)

  ws.on('message', function message(data) {
    console.log('MMUI message: %s', data)

    const msg = JSON.parse(data)

    if (msg.eventId === 'Global.GetStartupSettings') {
      ws.send(
        '{"msgType":"msg","uiaId":"audiosettings","msgId":"BoseAvailable","params":{"payload":{"status":0}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"vehsettings","msgId":"SteeringWheelLoc","params":{"payload":{"evData":"LHD"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"common","msgId":"Global.StatusUpdateVolumeOnOff","params":{"payload":{"volumeOnOffStatus":"VolumeOn"}}}'
      )

      ws.send(
        '{"msgType":"msg","uiaId":"system","msgId":"StatusMenu","params":{"payload":{"statusMenu":{"appName":"schedmaint","appStatus":"Available"}}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"system","msgId":"StatusMenu","params":{"payload":{"statusMenu":{"appName":"amradio","appStatus":"Available"}}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"system","msgId":"StatusMenuVisible","params":{"payload":{"appName":"sms","state":"Visible"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"system","msgId":"StatusMenuVisible","params":{"payload":{"appName":"notifications","state":"Visible"}}}'
      )

      ws.send(
        '{"msgType":"msg","uiaId":"syssettings","msgId":"Region","params":{"payload":{"RegionValue":"Region_Europe"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"syssettings","msgId":"DateFormat","params":{"payload":{"dateFormat":"YYMMDD"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"syssettings","msgId":"TimeFormat","params":{"payload":{"timeFormat":"hrs24"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"syssettings","msgId":"LanguageSupported","params":{"payload":{"languageName":{"ttsSupport":true,"vrSupport":true,"languageID":"LANGS_RU_RUSSIAN"}}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"syssettings","msgId":"KeyboardLanguage","params":{"payload":{"keyboardLanguage":"LANGS_KB_RU_RUSSIAN"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"syssettings","msgId":"Temperature","params":{"payload":{"temperatureUnits":"Celsius"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"syssettings","msgId":"Distance","params":{"payload":{"distanceUnits":"Kilometers"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"syssettings","msgId":"VehicleType","params":{"payload":{"vtype":"SETTINGS_VehicleModelType_J72A"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"syssettings","msgId":"VehicleConfigData","params":{"payload":{"evData":"New"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"syssettings","msgId":"CmuType","params":{"payload":{"CmuType":"SETTINGS_CmuType_3"}}}'
      )

      ws.send('{"msgType":"transition","enabled":true}')
      ws.send('{"msgType":"focusStack","appIdList":[{"id":"system"}]}')
      ws.send(
        '{"msgType":"ctxtChg","uiaId":"syssettings","ctxtId":"Idle","contextSeq":3,"params":{}}'
      )
      ws.send(
        '{"msgType":"ctxtChg","uiaId":"vehsettings","ctxtId":"Idle","contextSeq":4,"params":{}}'
      )
      ws.send(
        '{"msgType":"ctxtChg","uiaId":"system","ctxtId":"HomeScreen","contextSeq":5,"params":{}}'
      )
      ws.send('{"msgType":"transition","enabled":false}')
    }

    if (msg.eventId === 'SelectApplications') {
      ws.send('{"msgType":"transition","enabled":true}')
      ws.send(
        '{"msgType":"ctxtChg","uiaId":"system","ctxtId":"Applications","contextSeq":6,"params":{}}'
      )
      ws.send('{"msgType":"transition","enabled":false}')
    }

    if (msg.eventId === 'SelectVehicleStatusMonitor') {
      ws.send('{"msgType":"transition","enabled":true}')
      ws.send(
        '{"msgType":"ctxtChg","uiaId":"system","ctxtId":"VehicleStatusMonitor","contextSeq":10,"params":{}}'
      )
      ws.send('{"msgType":"focusStack","appIdList":[{"id":"system"}]}')
      ws.send('{"msgType":"transition","enabled":false}')
    }

    if (msg.eventId === 'SelectSchedMaint') {
      ws.send('{"msgType":"transition","enabled":true}')
      ws.send(
        '{"msgType":"msg","uiaId":"schedmaint","msgId":"MaintenanceListData","params":{"payload":{"MaintenanceList":{"Disp_distance":true,"Oil_setting_disp":"Manual_Only","DistIncr_scale":500,"DistIncr_scale_mile":250,"TimeIncr_scale":1,"DistanceDue_KM":500,"DistanceDue_MILE":250,"TimeDue":15,"SchedMaintsetDistDefault":20000,"SchedMntSetTimeDefault":360,"TireRotationSetDistDefault":10000,"OilSetDistDefault":10000,"ScdMaintSetting":"On","TireRotationSetting":"Off","OilChangeSetting":"Off","Unit":"KM"}}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"schedmaint","msgId":"SchedMaintCMUModelType","params":{"payload":{"schedMaintCMUModelType":{"ModelType":15,"CMUModel":1}}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"schedmaint","msgId":"SettingMessage","params":{"payload":{"settingmessage":{"SMSetting":"On","TRSetting":"Off","OilSetting":"Fixed"}}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"schedmaint","msgId":"OilChangeSettingDynamic","params":{"payload":{"oilchangesettingdynamic":"Manual_Only"}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"schedmaint","msgId":"SchedMaintDistRemaining","params":{"payload":{"schedmaintdistance":{"Distance":18562,"Unit":"KM"}}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"schedmaint","msgId":"OilMaintenanceDistanceChange","params":{"payload":{"distance":{"Distance":1062,"Unit":"KM"}}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"schedmaint","msgId":"SchedMaintDue","params":{"payload":{"schedmaintdue":{"VWM_ScheduleMaintDue":3,"status":false,"VWM_SchedMaintDue_J78":0}}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"schedmaint","msgId":"SchedMaintTimeRemaining","params":{"payload":{"schedmaintTime":360}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"schedmaint","msgId":"TireRotationDistRemaining","params":{"payload":{"tirerotationdistance":{"Distance":10000,"Unit":"KM"}}}}'
      )
      ws.send(
        '{"msgType":"msg","uiaId":"schedmaint","msgId":"OilLife","params":{"payload":{"oillife":{"oillifeValue":0,"oillifeCountDown":10000}}}}'
      )
      ws.send(
        '{"msgType":"ctxtChg","uiaId":"schedmaint","ctxtId":"MaintenanceList","contextSeq":11,"params":{}}'
      )
      ws.send(
        '{"msgType":"focusStack","appIdList":[{"id": "schedmaint"}, {"id":"system"}]}'
      )
      ws.send('{"msgType":"transition","enabled":false}')
    }

    if (msg.eventId === 'Global.GoBack') {
      ws.send('{"msgType":"transition","enabled":true}')
      ws.send(
        '{"msgType":"ctxtChg","uiaId":"system","ctxtId":"HomeScreen","contextSeq":7,"params":{}}'
      )
      ws.send('{"msgType":"focusStack","appIdList":[{"id":"system"}]}')
      ws.send('{"msgType":"transition","enabled":false}')
    }
  })
})

dbapiWS.on('connection', function connection(ws) {
  console.log('DBAPI onconnection')

  ws.on('error', console.error)

  ws.on('message', function message(data) {
    console.log('DBAPI message: %s', data)
  })
})

appsdkWS.on('connection', function connection(ws) {
  console.log('APPSDK onconnection')

  ws.on('error', console.error)

  ws.on('message', function message(data) {
    console.log('APPSDK message: %s', data)

    const msg = JSON.parse(data)

    if (msg.serviceName === 'msg' && msg.methodName === 'Connect') {
      ws.send(
        '{"msgType":"methodResponse","serviceName":"msg","methodName":"Connect","reqId":1,"params":{"context_out":0,"client_type_out":0,"callbacks_out":0,"status":0,"connection":0}}'
      )
    }
  })
})

console.log('Backend started');
