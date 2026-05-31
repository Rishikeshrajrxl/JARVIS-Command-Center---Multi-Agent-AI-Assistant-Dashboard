class VoiceService {

  speak(text) {

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.rate = 0.9;
    utterance.pitch = 0.9;

    speechSynthesis.speak(utterance);
  }

}

export default new VoiceService();