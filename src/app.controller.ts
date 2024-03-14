import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody } from '@nestjs/swagger';

const session = {
  mainDcId: 2,
  keys: {
    '2': '96215a1072c55bf05f7406dd5cdaa0ed77424d1fab33ac747ab07ca98de67d6b0ebaec780f50ffee9a57f8b7502833408e574487834ffd8dcb8281f6640427ab0438f281bf303570298345a3f08d834289f05be1af70d952e8bbcaa7a330e121f9e09a9236af66c96b284dd7077ea57b0df92ea3e8f49e187a954a6fdb997387b0c2463bb711dc510bfd9699ef0862650cea555faec1b8394658f86f4202b3e48bb54e1e346fb9c0f6670569b8038dd649216ee30d94ced1b8a31d2e2a727f13390f93f0cd14abd8f4fcf2908ffd7ff9112c5b6506a9c0f323fa1cec423b9d310ddfdbea0758ddf693a6ee769d5d4149cda7bf64bb53a0b1a1ca369341158323',
  },
  hashes: {
    '2': '0d3ab2bc198d0d295bfb47e172af8d6f2269c8b8',
  },
};

const session2 = {
  mainDcId: 2,
  keys: {
    '2': '4bc71bb710c084c54d35fac171afaaef0007f714361f6683f624640a9e6024919b45104477875185b7e7f722b99fdd2e00964f6f6d719f880ec22083f3e10d9b98510863773db171df320a99c21762055142c3e06cd74677590b380747821a35a1f2fa15994a9be436773b0c4103a45328417373e1c13625d7c9b02ab86abfed4605f984705e8364e7ea480a28e29e42a5f7aaf73b01f85673d04dcec1076d468b1429ef5de52e252486259949149bbeec79ab2951ea9b6f79148f3d9ca987f397e1c2eed5a78c0c130a1a5522487aafce06b48b35ee74bba8e338b21017b0d417f795fd81d43e2a2b873f810010a23c15d382d31e9dcb73719544c47e280057',
    '4': 'bb0bb665083b17dbae0335e0def18bc1201f053a7f66ef345175da2bda090a86b32d53836a78a9172310223dfef15f13fcd54882416f44bc32a0edbdbf688846226a58cabbb954d243480abf954730ec275cf45ab2c31132da21905019c48f508a1aaef7565ad181b6596437f2f809b22989a1bd40a66e63227311807d7e33a177ad3621b4e65ed33ae3202c50af8978d8ead42bfdbffedd3d7b3073a54f74f4859440fc687b30d539e4311eb84275e9e88a5c0b14d4af33f9a826b68b89d818dc7e321059b93c81facce8a93d961d83f7da5753541d1d059b09ba94a513a8f014d61db4b32b1e32c56dbcf4f358447009f40c0ef16143437075143610f115f0',
  },
  hashes: {
    '2': 'abd4ab5e5eaba7fb4a9e8ce350e1726096b8a5b8',
    '4': 'fa90f5ad111b848a50a06cc1ef3f4b5cac4f39a0',
  },
};
const authKey = {
  attachMenu: { bots: {} },
  passcode: {},
  twoFaSettings: {},
  isAppUpdateAvailable: false,
  isElectronUpdateAvailable: false,
  shouldShowContextMenuHint: true,
  audioPlayer: { lastPlaybackRate: 1 },
  mediaViewer: { lastPlaybackRate: 1 },
  authRememberMe: true,
  countryList: { phoneCodes: [], general: [] },
  blocked: { ids: [], totalCount: 0 },
  settings: {
    byKey: {
      theme: 'light',
      shouldUseSystemTheme: false,
      messageTextSize: 16,
      animationLevel: 2,
      messageSendKeyCombo: 'enter',
      canAutoLoadPhotoFromContacts: true,
      canAutoLoadPhotoInPrivateChats: true,
      canAutoLoadPhotoInGroups: true,
      canAutoLoadPhotoInChannels: true,
      canAutoLoadVideoFromContacts: true,
      canAutoLoadVideoInPrivateChats: true,
      canAutoLoadVideoInGroups: true,
      canAutoLoadVideoInChannels: true,
      canAutoLoadFileFromContacts: false,
      canAutoLoadFileInPrivateChats: false,
      canAutoLoadFileInGroups: false,
      canAutoLoadFileInChannels: false,
      autoLoadFileMaxSizeMb: 10,
      hasWebNotifications: true,
      hasPushNotifications: false,
      notificationSoundVolume: 5,
      shouldSuggestStickers: true,
      shouldSuggestCustomEmoji: true,
      shouldUpdateStickerSetOrder: true,
      language: 'en',
      timeFormat: '24h',
      wasTimeFormatSetManually: false,
      isConnectionStatusMinimized: true,
      shouldArchiveAndMuteNewNonContact: false,
      canTranslate: false,
      canTranslateChats: true,
      doNotTranslate: [],
      canDisplayChatInTitle: true,
      shouldAllowHttpTransport: true,
      shouldWarnAboutSvg: true,
      tabId: 8599726230311722,
      hasContactJoinedNotifications: true,
      hasPrivateChatsNotifications: true,
      hasPrivateChatsMessagePreview: true,
      hasGroupNotifications: true,
      hasGroupMessagePreview: true,
      hasBroadcastNotifications: true,
      hasBroadcastMessagePreview: true,
    },
    themes: {
      light: {
        isBlurred: true,
        patternColor:
          'hsla(206.25, 21.486486486486488%, 56.58823529411765%, .4)',
        background: 'qeZWES8rGVIEAAAARfWlK1lnfiI',
        backgroundColor: '#ced7de',
      },
      dark: {
        isBlurred: true,
        patternColor: '#0A0A0A8C',
      },
    },
    performance: {
      animatedEmoji: true,
      autoplayGifs: true,
      autoplayVideos: true,
      contextMenuAnimations: true,
      contextMenuBlur: true,
      loopAnimatedStickers: true,
      mediaViewerAnimations: true,
      messageComposerAnimations: true,
      messageSendingAnimations: true,
      pageTransitions: true,
      reactionEffects: true,
      rightColumnAnimations: true,
      stickerEffects: true,
      storyRibbonAnimations: true,
    },
    privacy: {},
    notifyExceptions: {},
  },
};
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('operator')
  getOperator(): string {
    return JSON.stringify({
      '5735038397': session,
      '6320677435': session2,
    });
  }

  @Get('auth')
  getAuth(): string {
    return JSON.stringify(authKey);
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  })
  @Post('login')
  postAuth(@Body() body: { name: string; password: string }): string {
    console.log(body);
    console.log(body.name);
    console.log(body.password);
    if (body.name === '5735038397  ' && body.password === 'secret') {
      return JSON.stringify({ session: session, id: 5735038397 });
    } else if (body.name === '6320677435' && body.password === '123456') {
      return JSON.stringify({ session: session2, id: 6320677435 });
    } else {
      throw new Error('Invalid user');
    }
  }
}
