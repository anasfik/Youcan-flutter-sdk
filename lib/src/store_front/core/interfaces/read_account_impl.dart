import '../models/review/user_info.dart';

abstract class ReadAccountImpl {
  Future<CustomerAccountInformations> customerAccount({
    required String userToken,
  });
}
